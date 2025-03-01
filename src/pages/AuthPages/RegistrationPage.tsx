import { Field } from "../../components/ui/Field"
import { useBackButton } from "../../hooks/useBackButton"
import { useMainButton } from "../../hooks/useMainButton"

export function RegistrationPage() {
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
        </form>
      </div>
    </div>
  );
}