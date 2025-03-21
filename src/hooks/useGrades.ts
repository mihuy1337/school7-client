import { useQuery } from "@tanstack/react-query"
import { Grade, ReportGrades, Statistics, Subject, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";

interface GradeWithFormattedDate extends Grade {
  subject: Subject;
  createdAt: string;
}

export function useGrades(lastGrades: number) {
  const { data, isLoading, isSuccess } = useQuery<ReportGrades>({
    queryKey: ['grades'],
    queryFn: () => gradesService.getGrades(),
    refetchInterval: 60 * 60 * 1000,
  });

  if (data === undefined) return { statistics: null, gradesSubjects: [], latestGrades: [], isLoading, isSuccess };

  const statistics: Statistics = data.statistics;
  const gradesSubjects: SubjectGrades[] = data.subjects;

  const allGrades: GradeWithFormattedDate[] = gradesSubjects.flatMap(subject =>
    subject.grades.map(grade => {
      const formattedDate = dayjs(grade.createdAt).format('DD.MM');
      return {
        ...grade,
        subject: subject.subject,
        createdAt: formattedDate,
      };
    })
  );

  const sortedGrades = allGrades.sort((a, b) =>
    dayjs(b.createdAt, 'DD.MM').isAfter(dayjs(a.createdAt, 'DD.MM')) ? -1 : 1
  );

  const latestGrades = sortedGrades.slice(0, lastGrades);

  return {
    statistics,
    gradesSubjects,
    latestGrades,
    isLoading,
    isSuccess,
  };
}