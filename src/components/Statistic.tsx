import { twMerge } from "tailwind-merge"
import { Badge } from "./ui/Badge"

interface Props {
  grade: number | undefined
  badges: any[]
  className?: string
  picClassName?: string
}

export function Statistic({grade, className, picClassName, badges}: Props) {
  return (
    <div className={twMerge('space-y-1 w-full h-full', className)}>
      <div className={twMerge(
        'p-4 rounded-lg relative overflow-hidden', // Цветной контейнер, картинка в нем
        grade !== undefined
          ? grade >= 5
            ? 'bg-5-main/10'
            : grade >= 4
              ? 'bg-4-main/10'
              : grade >= 3
                ? 'bg-3-main/10'
                : 'bg-2-main/10'
          : ''
      )}>
        {/* Контент сверху */}
        <div className="space-y-2 relative z-10">
          <h1 className={twMerge(
            'font-semibold text-5xl max-mobile-large:text-4xl',
            grade !== undefined
              ? grade >= 5
                ? 'text-5-main'
                : grade >= 4
                  ? 'text-4-main'
                  : grade >= 3
                    ? 'text-3-main'
                    : 'text-2-main'
              : ''
          )}>
            {String(grade).replace('.', ', ')}
          </h1>
          <div className="flex flex-wrap gap-1">
            {badges.map((item, index) => (
              <Badge key={index} className={
                grade !== undefined
                ? grade >= 5
                  ? 'text-5-main bg-5-main/15'
                  : grade >= 4
                    ? 'text-4-main bg-4-main/15'
                    : grade >= 3
                      ? 'text-3-main bg-3-main/15'
                      : 'text-2-main bg-2-main/15'
                : ''
              }>{item}</Badge>
            ))}
          </div>
        </div>
  
        {/* Картинка внутри контейнера */}
        {grade !== undefined && (
          <img
            className={twMerge(
              "absolute -bottom-5 -right-5 scale-x-[-1] h-[95%] z-0 object-contain pointer-events-none", 
              picClassName
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
    </div>
  );  
}
