import { Statistic } from "../../../components/Statistic";
import { useGrades } from "../../../hooks/useGrades";

export function StatisticsSection() {
  const {statistics} = useGrades(6)
  if (statistics === undefined) return
  return (
    <div className="space-y-2">
      <h1 className="h1">Статистика</h1>
      <div className="grid grid-cols-2 gap-3">
        <Statistic grade={statistics?.bestAverageGrade} desc='Лучший ср. балл' subject={statistics?.bestSubject.name}/>
        <Statistic grade={statistics?.worstAverageGrade} desc='Худший ср. балл' subject={statistics?.worstSubject.name}/>
        <Statistic className="col-span-2" grade={statistics?.globalAverageGrade} desc='Средний балл по всем предметам' subject='Все предметы'/>
      </div>
    </div>
  )
}
