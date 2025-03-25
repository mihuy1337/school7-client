import { useQuery } from "@tanstack/react-query"
import { ReportGrades, Statistics, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";

export function useGrades() {
  const today = dayjs().format('DD/MM');
  const { data, isLoading, isSuccess } = useQuery<ReportGrades>({
    queryKey: ['grades'],
    queryFn: () => gradesService.getGrades(),
    refetchInterval: 60 * 60 * 1000,
  });

  if (data === undefined) {
    return {
      isLoading,
      isSuccess,
      sortedGrades: [],
      statistics: null,
      newGrades: [],
    };
  }

  const statistics: Statistics = data.statistics;
  const gradesSubjects: SubjectGrades[] = data.subjects.map((subject) => ({
    ...subject,
    grades: [...subject.grades].sort((a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt))).map((grade) => ({
      ...grade,
      createdAt: dayjs(grade.createdAt).format('DD/MM'),
    })),
  }));

  const copyGradesSubjects: SubjectGrades[] = gradesSubjects
    .map((subject) => ({
      ...subject,
      grades: subject.grades.filter((grade) => grade.createdAt === today),
    }))
    .filter((subject) => subject.grades.length > 0);

  return {
    isLoading,
    isSuccess,
    newGrades: copyGradesSubjects,
    statistics,
    sortedGrades: gradesSubjects,
  };
}
