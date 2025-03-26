export interface Weight {
  id: number;
  name: string;
  alias: string;
  weight: number;
}

export interface Grade {
  grade: number;
  weight: Weight;
  createdAt: string;
}

export interface Subject {
  id: number;
  name: string;
  alias: string | null;
}

export interface SubjectGrades {
  subject: Subject;
  grades: Grade[];
  averageGrade: number;
}

export interface Statistics {
  globalAverageGrade: number;
  bestSubject: Subject
  bestAverageGrade: number;
  worstSubject: Subject
  worstAverageGrade: number;
}

export interface ReportGrades {
  subjects: SubjectGrades[];
  statistics: Statistics;
  newGrades: SubjectGrades[];
}