import { useQuery } from "@tanstack/react-query"
import { ReportGrades, Statistics, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";
import cloneDeep from 'lodash.clonedeep';

export function useGrades() {
  const today = dayjs().format('DD/MM');
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
      newGrades: [],
    };
  }

  // Полная глубокая копия всего объекта data
  const clonedData: ReportGrades = cloneDeep(data);
  const statistics: Statistics = clonedData.statistics;
  
  // Работаем с копией subjects
  const gradesSubjects: SubjectGrades[] = clonedData.subjects.map((subject) => ({
    ...subject,
    grades: subject.grades.map((grade) => ({
      ...grade,
      createdAt: dayjs(grade.createdAt).format('DD/MM'),
    })).sort((a, b) => dayjs(a.createdAt, 'DD/MM').diff(dayjs(b.createdAt, 'DD/MM'))),
  }));

  // Фильтруем оценки за сегодня
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

