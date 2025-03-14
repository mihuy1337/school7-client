export const DaysOfWeek = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота"
}

interface ILesson {
  number: number;
  subject: string;
  classroom: string | null;
  time: string;
};

export interface ISchedule {
  [className: string]: {
      [day: string]: ILesson[];
  };
};