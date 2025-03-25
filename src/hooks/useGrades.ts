import { useQuery } from "@tanstack/react-query"
import { Grade, ReportGrades, Statistics, Subject, SubjectGrades } from "../types/grades.types"
import { gradesService } from "../services/grades.service"
import dayjs from "dayjs";

interface GradeWithFormattedDate extends Grade {
  subject: Subject;
  createdAt: string;
}

export interface GroupedGrades {
  subject: Subject;
  grades: GradeWithFormattedDate[];
}

export function useGrades() {
  const today = dayjs().format('DD/MM')
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
      allGrades: [],
    };
  }

  const statistics: Statistics = data.statistics;
  const gradesSubjects: SubjectGrades[] = data.subjects;

  for (let i = 0; i < gradesSubjects.length; i++) {
    let subject = gradesSubjects[i] 
    subject.grades.sort((a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt)))
    console.log(subject)
    // console.log('========================================================')
    subject.grades.map((grade) => {
      const formattedDay = dayjs(grade.createdAt).format('DD/MM');
      grade.createdAt = formattedDay
    })
    // console.log(subject)
  }

  let copyGradesSubjects: SubjectGrades[] = JSON.parse(JSON.stringify(gradesSubjects))

  copyGradesSubjects = copyGradesSubjects.map((subject) => ({
    ...subject,
    grades: subject.grades.filter((grade) => grade.createdAt === today),
  }));

  console.log(copyGradesSubjects)

  return {
    isLoading,
    isSuccess,
    newGrades: copyGradesSubjects,
    statistics,
    sortedGrades: gradesSubjects,
  };
}