import { useQuery } from "@tanstack/react-query"
import { Grade, ReportGrades, Statistics, Subject, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

interface GradeWithFormattedDate extends Grade {
  subject: Subject;
  createdAt: string;
}

export interface GroupedGrades {
  subject: Subject;
  grades: GradeWithFormattedDate[];
}

export function useGrades() {
  dayjs.extend(utc);
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

  console.log(data)

  const statistics: Statistics = data.statistics;
  const gradesSubjects: SubjectGrades[] = data.subjects;

  for (let i = 0; i < gradesSubjects.length; i++) {
    let subject = gradesSubjects[i];

    // Сортируем копию массива, чтобы не мутировать оригинал
    subject.grades = [...subject.grades].sort((a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt)));

    // Форматируем даты в новом массиве
    subject.grades = subject.grades.map((grade) => ({
      ...grade,
      createdAt: dayjs(grade.createdAt).isValid()
        ? dayjs(grade.createdAt).format('DD/MM')
        : 'Некорректная дата',
    }));

    console.log('Formatted subject:', subject);
  }

  return {
    isLoading,
    isSuccess,
    statistics,
  };
}
