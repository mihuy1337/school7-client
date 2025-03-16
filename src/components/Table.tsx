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
    <div>
      <h1>{H1}</h1>
      <div className="p-4 bg-black-secondary rounded-lg w-full">
        {data.map((item, index) => (
          <div className="flex justify-between w-full font-medium py-4 border-b-2 border-b-black-hint" key={index}>
            <div>{`${item.number}. ${item.name}`}</div>
            <div>{`${item.desc}`}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
