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
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{`${item.number}. ${item.name}`}</td>
              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
