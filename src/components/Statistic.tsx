import { twMerge } from "tailwind-merge"

interface Props {
  grade: number | undefined
  subject: string | undefined
  desc: string
  className?: string
  picClassName?: string
}

export function Statistic({grade, desc, subject, className, picClassName}: Props) {
  return (
    <div className={twMerge('space-y-1 w-full h-full', className)}>
      <h1 className="text-[14px] font-medium text-black-hint">{desc}</h1>
      
      <div className={twMerge(
        'p-4 rounded-lg relative overflow-hidden border-1', // Цветной контейнер, картинка в нем
        grade !== undefined
          ? grade >= 5
            ? 'bg-5-main/10 border-5-main/40'
            : grade >= 4
              ? 'bg-4-main/10 border-4-main/40'
              : grade >= 3
                ? 'bg-3-main/10 border-3-main/40'
                : 'bg-2-main/10 border-2-main/40'
          : ''
      )}>
        {/* Контент сверху */}
        <div className="space-y-2 relative z-10">
          <h1 className={twMerge(
            'font-semibold text-5xl',
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
          <p className={twMerge(
            'font-medium',
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
            {subject}
          </p>
        </div>
  
        {/* Картинка внутри контейнера */}
        {grade !== undefined && (
          <img
            className={twMerge(
              "absolute -bottom-5 -right-5 scale-x-[-1] h-[95%] z-0 object-contain pointer-events-none", 
              picClassName
            )}
            src={
              grade > 5
                ? '/pic6.svg'
                : grade > 4
                  ? '/pic7.svg'
                  : grade > 3
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
