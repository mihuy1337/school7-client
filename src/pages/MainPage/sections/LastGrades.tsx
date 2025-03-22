import { Grade } from "../../../components/Grade";
import { Badge } from "../../../components/ui/Badge";
import { useGrades } from "../../../hooks/useGrades";

export function LastGrades() {
  const { latestGroupedGrades, isSuccess} = useGrades(6)
  return (
    <div>
      <h1 className="h1 mb-2">Последние оценки</h1>
      {isSuccess ? (
        <div className="grid auto-cols-max grid-flow-col gap-4 overflow-auto">
          {latestGroupedGrades.map((group, index) => (
            <div className="space-y-1" key={index}>
              <Badge className="inline-flex text-[12px]">
                {group.subject.alias ?? group.subject.name}
              </Badge>
              <div className="flex gap-2">
                {group.grades.map((grade, index) => (
                  <Grade key={index} grade={grade.grade} type={grade.weight.name && grade.weight.alias} date={grade.createdAt}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Идет загрузка...</p>
      )}
    </div>
  )
}
