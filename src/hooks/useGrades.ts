import { useQuery } from "@tanstack/react-query"
import { ReportGrades } from "../types/grades.types"
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

  const formattedData = {
    ...data,
    subjects: data.subjects.map(subject => ({
      ...subject,
      grades: subject.grades.map(grade => ({
        ...grade,
        createdAt: dayjs(grade.createdAt).format('DD/MM'),
      })),
    })),
    newGrades: data.newGrades.map(subject => ({
      ...subject,
      grades: subject.grades.map(grade => ({
        ...grade,
        createdAt: dayjs(grade.createdAt).format('DD/MM'),
      })),
    })),
  };

  return {
    isLoading,
    isSuccess,
    newGrades: formattedData.newGrades,
    statistics: formattedData.statistics,
    sortedGrades: formattedData.subjects,
  };
}


