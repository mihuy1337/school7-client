import { Field } from "../../components/ui/Field";
import { useBackButton } from "../../hooks/useBackButton";
import { useMainButton } from "../../hooks/useMainButton";

export function LoginPage() {
  useBackButton();
  useMainButton({ text: "Войти" });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-safe-top">
      <div className="w-full">
        <h1 className="text-3xl font-semibold">Вход</h1>
        <form className="space-y-4 mt-6">
          <Field id="login" placeholder="Логин" type="text" />
          <Field id="password" placeholder="Пароль" type="password" />
        </form>
      </div>
    </div>
  );
}
