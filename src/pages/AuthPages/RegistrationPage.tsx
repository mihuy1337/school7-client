import { useState } from "react";
import { Field } from "../../components/ui/Field";
import { useBackButton } from "../../hooks/useBackButton";
import { useMainButton } from "../../hooks/useMainButton";
import { useClasses } from "../../hooks/useClasses";
import { Loading } from "../../components/Loading";

export function RegistrationPage() {
  const [selectedValue, setSelectedValue] = useState('');
  const { data, isLoading, isSuccess } = useClasses(); // Деструктурируем объект

  useBackButton();
  useMainButton({ text: "Зарегистрироваться" });

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess && data) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center pt-safe-top">
        <div className="w-full">
          <h1 className="text-3xl font-semibold">Регистрация</h1>
          <form className="space-y-4 mt-6">
            <Field id="login" placeholder="Придумай логин" type="text" />
            <Field id="password" placeholder="Придумай пароль" type="password" />
            <Field id="name" placeholder="Имя" type="text" />
            <Field id="lastname" placeholder="Фамилия" type="text" />
            <Field id="middlename" placeholder="Отчество (если есть)" type="text" />
            <select
              id="role"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="appearance-none focus:outline-none border-2 border-transparent focus:border-accent focus:ring-accent transition-all duration-300 p-4 w-full bg-black-secondary text-hint font-medium text-white-main text-base rounded-xl"
            >
              {data.map((c) => (
                <option key={c.id} value={c.id} className="text-white-main p-4">
                  {c.className}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    );
  }

  return null; // Это на случай, если данные не были получены (isSuccess false)
}
