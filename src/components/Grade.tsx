import { twMerge } from "tailwind-merge"
import { Badge } from "./ui/Badge";
import dayjs from "dayjs";

interface Props {
  grade: number,
  date?: string,
  className?: string,
  badgeStyles?: string,
  badgeDayStyles?: string
  type: string
}

export function Grade({grade, date, type, className, badgeStyles, badgeDayStyles}: Props) {
  return (
    <div className={twMerge('overflow-hidden p-2 rounded-lg relative', grade >= 5 ? 'bg-5-main/10' : grade >= 4 ? 'bg-4-main/10' : grade >= 3 ? 'bg-3-main/10' : 'bg-2-main/10', className)}>
      <div className="relative z-10">
        <div className={twMerge('font-semibold text-4xl', grade >= 5 ? 'text-5-main' : grade >= 4 ? 'text-4-main' : grade >= 3 ? 'text-3-main' : 'text-2-main')}>{grade}</div>
        <div className="flex flex-wrap-reverse gap-1">
          <Badge className={twMerge(
            grade !== undefined
            ? grade >= 5
              ? 'text-5-main bg-5-main/15'
              : grade >= 4
                ? 'text-4-main bg-4-main/15'
                : grade >= 3
                  ? 'text-3-main bg-3-main/15'
                  : 'text-2-main bg-2-main/15'
            : '',
            badgeStyles
          )}>{type}</Badge>
          {date && (
            <Badge className={twMerge(
              grade !== undefined
              ? grade >= 5
                ? 'text-5-main bg-5-main/15'
                : grade >= 4
                  ? 'text-4-main bg-4-main/15'
                  : grade >= 3
                    ? 'text-3-main bg-3-main/15'
                    : 'text-2-main bg-2-main/15'
              : '',
              badgeStyles, badgeDayStyles
            )}>{date === dayjs().format('DD/MM') ? "Сегодня" : date === dayjs().subtract(1, 'day').format('DD/MM') ? 'Вчера' : date}</Badge>
          )}
        </div>
      </div>
      {grade !== undefined && (
          <img
            className={twMerge(
              "absolute -bottom-1 -right-2.5 scale-x-[-1] h-[90%] z-0 object-contain pointer-events-none",
            )}
            src={
              grade >= 5
                ? '/pic6.svg'
                : grade >= 4
                  ? '/pic7.svg'
                  : grade >= 3
                    ? '/pic8.svg'
                    : '/pic9.svg'
            }
            alt="Grade Visual"
          />
        )}
    </div>
  )
}
