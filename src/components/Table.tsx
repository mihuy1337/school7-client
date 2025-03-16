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
      <table className="bg-black-secondary rounded-lg p-4">
        <tbody className="font-medium">
          {data.map((item, index) => (
            <tr className="pb-4" key={index}>
              <td>{`${item.number}. ${item.name}`}</td>
              <td className="text-right">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
