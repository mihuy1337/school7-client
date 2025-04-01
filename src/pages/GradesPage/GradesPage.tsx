import dayjs from "dayjs";
import { Grade } from "../../components/Grade";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Badge } from "../../components/ui/Badge";
import { useGrades } from "../../hooks/useGrades";
import { MySecondaryButton } from "../../components/MySecondaryButton";
import { useNavigate } from "react-router";
import { MyMainButton } from "../../components/MyMainButton";

export function GradesPage() {
  const today = dayjs().format('DD/MM')
  const navigate = useNavigate()
  const {sortedGrades, isLoading} = useGrades()
  return (
    <>
      {!isLoading ? (
        <>
          <Header>Оценки</Header>
          {sortedGrades === undefined ? <p>Ничего нет...</p> : (
            <div className="mt-safe-tg-top space-y-6">
            {sortedGrades.map((subject) => (
              <div className="space-y-2">
                <h1 className="h2" key={subject.subject.id}>{subject.subject.name}</h1>
                <div className="grid grid-cols-3 gap-1">
                  {subject.grades.map((grade, index) => (
                    <Grade badgeDayStyles={
                      grade.createdAt === today ?
                       grade.grade >= 5
                        ? 'bg-5-main text-black-main' : 
                        grade.grade >= 4 ? 'bg-4-main text-black-main' : 
                        grade.grade >= 3 ? 'bg-3-main text-black-main' :
                        'bg-2-main text-black-main' : ''
                    } badgeStyles='text-[10px]' key={index} grade={grade.grade} date={grade.createdAt} type={grade.weight.alias}/>
                  ))}
                </div>
                <div className="flex items-center">
                  <p className="mr-1 font-semibold">Ср. балл: </p>
                  <Badge className={`text-[13px] ${subject.averageGrade !== undefined
                  ? subject.averageGrade >= 5
                    ? 'text-5-main bg-5-main/15'
                    : subject.averageGrade >= 4
                      ? 'text-4-main bg-4-main/15'
                      : subject.averageGrade >= 3
                        ? 'text-3-main bg-3-main/15'
                        : 'text-2-main bg-2-main/15'
                  : ''}`}>{subject.averageGrade}</Badge>
                </div>
              </div>
            ))}
          </div>
          )}
          <MyMainButton text="Итоговые" onClick={() => navigate('/grades/final')}/>
          <MySecondaryButton text="На главную" onClick={() => navigate('/')}/>
        </>
      ) : (
        <Loading/>
      )}
    </>
  )
}
