import { Grade } from "../../../components/Grade";
import { useGrades } from "../../../hooks/useGrades";

export function LastGrades() {
  const { latestGroupedGrades, isSuccess} = useGrades(6)
  return (
    <div>
      <h1 className="h1 mb-4">Последние оценки</h1>
      {isSuccess ? (
        <div className="flex gap-4 overflow-auto">
          {latestGroupedGrades.map((group, index) => (
            <div className="" key={index}>
              <h1 className="text-[14px] font-medium text-black-hint">{group.subject.alias}</h1>
              <div className="flex gap-2">
                {group.grades.map((grade, index) => (
                  <Grade key={index} grade={grade.grade} date={grade.createdAt}/>
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
