import { useQuery } from "@tanstack/react-query"
import { Grade, ReportGrades, Statistics, SubjectGrades } from "../types/grades.types"
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
      latestGroupedGrades: [],
      statistics: null,
      newGrades: [],
    };
  }

  const statistics: Statistics = JSON.parse(JSON.stringify(data.statistics));
  
  // Полная глубокая копия данных
  const gradesSubjects: SubjectGrades[] = JSON.parse(JSON.stringify(data.subjects)).map((subject: SubjectGrades) => ({
    ...subject,
    grades: subject.grades.map((grade: Grade) => ({
      ...grade,
      createdAt: dayjs(grade.createdAt).format('DD/MM'),
    })).sort((a: Grade, b: Grade) => dayjs(a.createdAt, 'DD/MM').diff(dayjs(b.createdAt, 'DD/MM'))),
  }));

  // Глубокая копия gradesSubjects для copyGradesSubjects
  const copyGradesSubjects: SubjectGrades[] = JSON.parse(JSON.stringify(gradesSubjects)).map((subject: SubjectGrades) => ({
    ...subject,
    grades: subject.grades.filter((grade: Grade) => grade.createdAt === today),
  })).filter((subject: SubjectGrades) => subject.grades.length > 0);

  return {
    isLoading,
    isSuccess,
    newGrades: copyGradesSubjects,
    statistics,
    sortedGrades: gradesSubjects,
  };
}
