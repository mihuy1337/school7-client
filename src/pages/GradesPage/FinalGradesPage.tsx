import { useNavigate } from "react-router"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useFinalGrades } from "../../hooks/useFinalGrades"
import { Grade } from "../../components/Grade"
import { twMerge } from "tailwind-merge"

export function FinalGradesPage() {
  const {isLoading, finalGrades} = useFinalGrades()
  const navigate = useNavigate()
  return (
    <>
      {!isLoading ? (
        <>
          <Header>Итоговые оценки</Header>
          <div className="mt-safe-tg-top space-y-6">
            {finalGrades.length !== 0 ? (
              <>
                {finalGrades.map((subject, index) => {
                  return <div className="space-y-2" key={index}>
                    <h1 className="h2">{subject.name}</h1>
                    {subject.finalGradePeriods.length !== 0 ? (
                      <div className="grid grid-cols-3 gap-1">
                      {subject.finalGradePeriods.map((grade, index) =>{
                        return (
                          <Grade key={index} badgeStyles="text-[12px]" grade={grade.grade} type={grade.name} />
                        );
                    })}
                        <div className="col-span-2">
                          <Grade picClassName="-bottom-5 right-5 h-[130%]" grade={Number(subject.average.toFixed(2))} type='Итоговая' badgeStyles={twMerge("text-black-main", subject.average == 5 ? "bg-5-main" : subject.average >= 4 ? "bg-4-main" : subject.average >= 3 ? "bg-3-main" : "bg-2-main")}/>
                        </div>
                      </div>
                    ) : (
                      <p>Оценок нет</p>
                    )}
                  </div>;
                })}
              </>
            ) : (
              <p>Здесь ничего нет...</p>
            )}
          </div>
          <MyMainButton text="Все оценки" onClick={() => navigate('/grades')}/>
          <MySecondaryButton text="На главную" onClick={() => navigate('/')}/>
        </>
      ) : (
        <Loading/>
      )}
    </>
  )
}
