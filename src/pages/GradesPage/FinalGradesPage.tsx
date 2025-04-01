import { useNavigate } from "react-router"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useFinalGrades } from "../../hooks/useFinalGrades"
import { Grade } from "../../components/Grade"

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
                          <div key={index} className={index === subject.finalGradePeriods.length - 1 ? "col-span-3" : ""}>
                            <Grade gradeStyles="text-5xl" badgeStyles="text-[12px]" grade={grade.grade} type={grade.name} />
                          </div>
                        );
                    })}
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
