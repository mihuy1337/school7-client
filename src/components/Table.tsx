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
    <div className="space-y-2 mb-4">
      <h1 className="font-medium text-xl text-black-hint">{H1}</h1>
      <div className="px-4 bg-black-secondary rounded-lg w-full">
        {data.map((item, index) => (
          <div className="inline-flex justify-between w-full font-medium py-4 border-b-2 border-b-black-hint last:border-b-0" key={index}>
            <div className="mr-2">{`${item.number}. ${item.name}`}</div>
            <div>{`${item.desc}`}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
