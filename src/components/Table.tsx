export interface RowProps {
  number: number
  name: string
  desc: string
}

interface TableProps {
  data: RowProps[]
  H1: string
}


export function Table({data, H1}: TableProps) {
  return (
    <div className="space-y-2 my-2">
      <h1 className="font-medium text-xl text-black-hint">{H1}</h1>
      <div className="bg-black-secondary rounded-lg w-full">
        {data.map((item, index) => (
          <div className="relative font-medium py-4 max-mobile-large:text-[14px]" key={index}>
            <div className="px-4 inline-flex justify-between w-full">
              <div className="mr-2">{`${item.number}. ${item.name}`}</div>
              <div>{`${item.desc}`}</div>
            </div>
            {index !== data.length - 1 && (
              <div className="absolute left-0 right-0 bottom-0 h-[0.5px] bg-black-hint"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
