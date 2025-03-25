import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useBackButton } from "../../hooks/useBackButton";
import { useGrades } from "../../hooks/useGrades";

export function GradesPage() {
  useBackButton()
  const {allGrades, isLoading} = useGrades(6)
  console.log(allGrades)
  return (
    <>
      {!isLoading? (
        <>
          <Header>Оценки</Header>
          <div className="mt-safe-tg-top">
            {/* {allGrades.map((subjects) => (
              <h1 key={subjects.subject.id}>{subjects.subject.name} {subjects.subject.id}</h1>
            ))} */}
          </div>
        </>
      ) : (
        <Loading/>
      )}
    </>
  )
}
