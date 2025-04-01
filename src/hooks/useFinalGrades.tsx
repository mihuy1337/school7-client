import { useQuery } from "@tanstack/react-query";
import { gradesService } from "../services/grades.service";
import { FinalGrades } from "../types/grades.types";

export function useFinalGrades() {
  const { data, isLoading, isSuccess } = useQuery<FinalGrades[]>({
    queryKey: ['grades-final'],
    queryFn: () => gradesService.getFinalGrades(),
    refetchInterval: 60 * 60 * 1000,
  });

  if (!data) {
    return {
      isLoading,
      isSuccess,
      finalGrades: []
    };
  }

  return {
    isLoading,
    isSuccess,
    finalGrades: data
  };
}