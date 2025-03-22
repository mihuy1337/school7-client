import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"

interface Props {
  grade: number,
  date: string,
  className?: string,
  type?: string
}

export function Grade({grade, date, className}: Props) {
  const today = dayjs().format('DD.MM');
  return (
    <div className={twMerge('py-2 pl-3 pr-5 rounded-lg border-1', grade >= 5 ? 'bg-5-main/10 border-5-main/60' : grade >= 4 ? 'bg-4-main/10 border-4-main/60' : grade >= 3 ? 'bg-3-main/10 border-3-main/60' : 'bg-2-main/10 border-2-main/60', date !== today ? 'border-transparent' : '', className)}>
      <div className={twMerge('font-semibold text-4xl', grade >= 5 ? 'text-5-main' : grade >= 4 ? 'text-4-main' : grade >= 3 ? 'text-3-main' : 'text-2-main')}>{grade}</div>
      <div className={twMerge('font-medium text-[14px]', grade >= 5 ? 'text-5-main/60' : grade >= 4 ? 'text-4-main/60' : grade >= 3 ? 'text-3-main/60' : 'text-2-main/60')}>{date}</div>
    </div>
  )
}
