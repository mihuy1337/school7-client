import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useBackButton } from "../../hooks/useBackButton";
import { useGrades } from "../../hooks/useGrades";

export function GradesPage() {
  useBackButton()
  const {sortedGrades, isLoading} = useGrades()
  return (
    <>
      {!isLoading ? (
        <>
          <Header>Оценки</Header>
          {sortedGrades === undefined ? <p>Ничего неет...</p> : (
            <div className="mt-safe-tg-top">
            {sortedGrades.map((subject) => (
              <h1 key={subject.subject.id}>{subject.subject.name}</h1>
            ))}
          </div>
          )}
        </>
      ) : (
        <Loading/>
      )}
    </>
  )
}
