import { useState } from "react";
import { Field } from "../../components/ui/Field"
import { useBackButton } from "../../hooks/useBackButton"
import { useMainButton } from "../../hooks/useMainButton"
import { useClasses } from "../../hooks/useClasses";

export function RegistrationPage() {
  const [selectedValue, setSelectedValue] = useState("student");
  const { data, isLoading, isSuccess } = useClasses(); // Деструктурируем объект

  useBackButton();
  useMainButton({ text: "Зарегистрироваться" });

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

          {isLoading && <p>Загрузка классов...</p>}
          {isSuccess && data && (
            <select
              id="role"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              {data.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.className}
                </option>
              ))}
            </select>
          )}
        </form>
      </div>
    </div>
  );
}
