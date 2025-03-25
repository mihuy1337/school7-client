import { Table } from "../../../components/Table";
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/ru'
import { useSchedule } from "../../../hooks/useSchedule";

export function ScheduleSection() {
  dayjs.extend(weekday);
  dayjs.locale('ru');

  const today = dayjs().weekday();

  let day = today;
  if (today === 5 || today === 6) {
    day = 0;
  }

  const scheduleToday = useSchedule({ queryKey: ['schedule', `${day}`], day: day });
  const scheduleTomorrow = useSchedule({ queryKey: ['schedule', `${day + 1}`], day: day + 1 });

  // Функция для форматирования заголовка
  const formatHeader = (date: dayjs.Dayjs, isToday: boolean, isTomorrow: boolean) => {
    if (isToday) {
      return ['Сегодня', `${date.format('D MMMM')}`];
    }
    if (isTomorrow) {
      return ['Завтра', `${date.format('D MMMM')}`];
    }
    // Делаем первую букву заглавной
    const dayName = date.format('dddd');
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    return [capitalizedDayName, date.format('D MMMM')];
  };

  return (
    <div>
      <h1 className="h1 mb-2">Расписание</h1>
      {scheduleToday?.data === undefined ? (
        <p>Упс, здесь ничего нет...</p>
      ) : (
        <Table
          weekday={formatHeader(dayjs().weekday(day), today === day, false)[0]}
          date={formatHeader(dayjs().weekday(day), today === day, false)[1]}
          data={scheduleToday?.data}
        />
      )}
      {scheduleTomorrow?.data === undefined ? (
        <p>Упс, здесь ничего нет...</p>
      ) : (
        <Table
          weekday={formatHeader(dayjs().weekday(day + 1), false, today === day)[0]}
          date={formatHeader(dayjs().weekday(day + 1), false, today === day)[1]}
          data={scheduleTomorrow?.data}
        />
      )}
    </div>
  );
}
