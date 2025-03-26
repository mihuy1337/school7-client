import { useQuery } from "@tanstack/react-query"
import { ReportGrades, Statistics, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";

export function useGrades() {
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

  data.subjects.map(subject => subject.grades.map(grade => grade.createdAt = dayjs(grade.createdAt).format('DD/MM')))
  data.allGrades.map(subject => subject.grades.map(grade => grade.createdAt = dayjs(grade.createdAt).format('DD/MM')))

  console.log(data)

  return {
    isLoading,
    isSuccess,
    newGrades: data.allGrades,
    statistics: data.statistics,
    sortedGrades: data.subjects,
  };
}

