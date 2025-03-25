import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useBackButton } from "../../hooks/useBackButton";
import { useGrades } from "../../hooks/useGrades";

export function GradesPage() {
  useBackButton()
  const {newGrades, isLoading} = useGrades()
  return (
    <>
      {!isLoading ? (
        <>
          <Header>Оценки</Header>
          <div className="mt-safe-tg-top">
            {newGrades.map((subject) => (
              <h1 key={subject.subject.id}>{subject.subject.name}</h1>
            ))}
          </div>
        </>
      ) : (
        <Loading/>
      )}
    </>
  )
}
