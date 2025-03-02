import picture from '../assets/pic4.svg'

export function Loading() {
  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <img className="h-auto max-w-full" src={picture}/>
      <h1 className="font-rubik text-2xl font-semibold text-center">
        <span className="text-accent">Подожди</span>! Идет загрузка...
      </h1>
    </div>
  )
}
