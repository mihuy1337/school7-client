import { Statistic } from "../../../components/Statistic";
import { Statistics } from "../../../types/grades.types";

interface Props {
  statistics: Statistics | null
}

export function StatisticsSection({statistics}: Props) {
  if (statistics === undefined) return <>Что то не то...</>
  return (
    <div className="space-y-2">
      <h1 className="h1">Статистика</h1>
      <div className="grid grid-cols-2 gap-2">
        <Statistic grade={statistics?.bestAverageGrade} badges={['Лучший ср. балл', statistics?.bestSubject.name]}/>
        <Statistic grade={statistics?.worstAverageGrade} badges={['Худший ср. балл', statistics?.worstSubject.name]}/>
        <Statistic className="col-span-2" picClassName="h-[140%] -bottom-10 right-7" grade={statistics?.globalAverageGrade} badges={['Ср. балл', 'Все предметы']}/>
      </div>
    </div>
  )
}
