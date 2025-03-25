import { Grade } from "../../../components/Grade";
import { Badge } from "../../../components/ui/Badge";
import { SubjectGrades } from "../../../types/grades.types";

interface Props {
  newGrades: SubjectGrades[] | undefined
}

export function LastGrades({ newGrades }: Props) {
  if (!newGrades) return <p>Оценок за сегодня пока что нет</p>
  return (
    <div>
      <h1 className="h1 mb-2">Последние оценки</h1>
        <div className="grid auto-cols-max grid-flow-col gap-4 overflow-auto">
          {newGrades.map((group, index) => (
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
    </div>
  )
}
