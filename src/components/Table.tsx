import { Badge } from "./ui/Badge"

export interface RowProps {
  number: number
  name: string
  desc: string
}

interface TableProps {
  data: RowProps[]
  weekday: string
  date: string
}


export function Table({data, weekday, date}: TableProps) {
  return (
    <div className="space-y-1 mb-4">
      <div className="flex gap-1">
        <Badge className="text-[12px]">{weekday}</Badge>
        <Badge className="text-[12px]">{date}</Badge>
      </div>
      <div className="bg-black-secondary rounded-lg border-1 border-black-hint w-full">
        {data.map((item, index) => (
          <div className="font-medium text-[14px] max-mobile-large:text-[14px]" key={index}>
            <div className="py-2.5 px-4 inline-flex justify-between w-full">
              <div className="mr-2">{`${item.number}. ${item.name}`}</div>
              <div>{`${item.desc}`}</div>
            </div>
            {index !== data.length - 1 && (
              <div className="h-[1px] bg-black-hint"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
