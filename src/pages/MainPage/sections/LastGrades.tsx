import { Grade } from "../../../components/Grade";

export function LastGrades() {
  return (
    <div>
      <h1 className="h1 mb-4">Последние оценки</h1>
      <div className="flex gap-2 overflow-auto">
        <Grade grade={5} date='22.03'/>
        <Grade grade={4} date='21.03'/>
        <Grade grade={3} date='22.03'/>
        <Grade grade={2} date='21.03'/>
        <Grade grade={4} date='22.03'/>
        <Grade grade={3} date='20.03'/>
        <Grade grade={5} date='19.03'/>
      </div>
    </div>
  )
}
