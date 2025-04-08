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

  const finalGradesWithAnnualGrade = data.map((finalGrade) => {
    const annualGrades: number[] = finalGrade.finalGradePeriods.map(period => period.grade);
    const average = annualGrades.reduce((acc, grade) => acc + grade, 0) / annualGrades.length;
  
    return {
      ...finalGrade,
      average,
    };
  });
  

  return {
    isLoading,
    isSuccess,
    finalGrades: finalGradesWithAnnualGrade
  };
}