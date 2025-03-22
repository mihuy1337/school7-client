import { useQuery } from "@tanstack/react-query"
import { Grade, ReportGrades, Statistics, Subject, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";

interface GradeWithFormattedDate extends Grade {
  subject: Subject;
  createdAt: string;
}

interface GroupedGrades {
  subject: Subject;
  grades: GradeWithFormattedDate[];
}

export function useGrades(lastGrades: number) {
  const { data, isLoading, isSuccess } = useQuery<ReportGrades>({
    queryKey: ['grades'],
    queryFn: () => gradesService.getGrades(),
    refetchInterval: 60 * 60 * 1000,
  });

  if (!data) {
    return {
      isLoading,
      isSuccess,
      latestGroupedGrades: [],
      statistics: null,
      allGrades: [],
    };
  }

  const statistics: Statistics = data.statistics;
  const gradesSubjects: SubjectGrades[] = data.subjects;

  const allGrades: GradeWithFormattedDate[] = gradesSubjects.flatMap(subject =>
    subject.grades.map(grade => ({
      ...grade,
      subject: subject.subject,
      // оставляем дату как ISO-строку, не форматируем
      createdAt: grade.createdAt,
    }))
  );

  const sortedGrades = allGrades.sort((a, b) =>
    dayjs(b.createdAt).isAfter(dayjs(a.createdAt)) ? 1 : -1
  );

  const latestGrades = sortedGrades.slice(0, lastGrades);

  const groupedGradesMap = latestGrades.reduce((acc, grade) => {
    const subjectId = grade.subject.id;
    if (!acc.has(subjectId)) {
      acc.set(subjectId, {
        subject: grade.subject,
        grades: [],
      });
    }
    acc.get(subjectId)!.grades.push(grade);
    return acc;
  }, new Map<number, GroupedGrades>());

  const latestGroupedGrades = Array.from(groupedGradesMap.values()).sort((a, b) =>
    dayjs(b.grades[0].createdAt).isAfter(dayjs(a.grades[0].createdAt)) ? 1 : -1
  );

  // При необходимости форматируй дату здесь или в UI
  const formattedAllGrades = sortedGrades.map(grade => ({
    ...grade,
    createdAt: dayjs(grade.createdAt).format('DD.MM'),
  }));

  const formattedGroupedGrades = latestGroupedGrades.map(group => ({
    ...group,
    grades: group.grades.map(grade => ({
      ...grade,
      createdAt: dayjs(grade.createdAt).format('DD.MM'),
    })),
  }));

  return {
    isLoading,
    isSuccess,
    latestGroupedGrades: formattedGroupedGrades,
    statistics,
    allGrades: formattedAllGrades,
  };
}
