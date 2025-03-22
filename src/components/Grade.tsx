import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"
import { Badge } from "./ui/Badge";

interface Props {
  grade: number,
  date: string,
  className?: string,
  type: string
}

export function Grade({grade, date, type, className}: Props) {
  const today = dayjs().format('DD.MM');
  return (
    <div className={twMerge('overflow-hidden p-2 rounded-lg border-1 relative', grade >= 5 ? 'bg-5-main/10 border-5-main/60' : grade >= 4 ? 'bg-4-main/10 border-4-main/60' : grade >= 3 ? 'bg-3-main/10 border-3-main/60' : 'bg-2-main/10 border-2-main/60', className)}>
      <div className="relative z-10">
        <div className={twMerge('font-semibold text-4xl', grade >= 5 ? 'text-5-main' : grade >= 4 ? 'text-4-main' : grade >= 3 ? 'text-3-main' : 'text-2-main')}>{grade}</div>
        <div className="flex gap-1">
          <Badge className={
              grade !== undefined
                  ? grade >= 5
                    ? 'text-5-main border-5-main/60 bg-5-main/10'
                    : grade >= 4
                      ? 'text-4-main border-4-main/60 bg-4-main/10'
                      : grade >= 3
                        ? 'text-3-main border-3-main/60 bg-3-main/10'
                        : 'text-2-main border-2-main/60 bg-2-main/10'
                  : ''
            }>{date}</Badge>
          <Badge className={
              grade !== undefined
                  ? grade >= 5
                    ? 'text-5-main border-5-main/60 bg-5-main/10'
                    : grade >= 4
                      ? 'text-4-main border-4-main/60 bg-4-main/10'
                      : grade >= 3
                        ? 'text-3-main border-3-main/60 bg-3-main/10'
                        : 'text-2-main border-2-main/60 bg-2-main/10'
                  : ''
            }>{type}</Badge>
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
