import { useMutation } from "@tanstack/react-query";
import WebApp from "@twa-dev/sdk";
import { useForm, SubmitHandler } from "react-hook-form";
import { Field } from "../../components/ui/Field";
import { useBackButton } from "../../hooks/useBackButton";
import { useMainButton } from "../../hooks/useMainButton";
import { authService } from "../../services/auth.service";
import { ILoginForm } from "../../types/auth.types";

export function LoginPage() {
  useBackButton();
  const { register, handleSubmit, reset, formState } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: ILoginForm) => authService.login(data),
    onSuccess() {
      WebApp.showAlert("Ты вошел, остальное в процессе...")
      reset();
    },
    onError() {
      WebApp.showAlert("Какая-то ошибка...")
      reset()
    }
  });

  const onSubmit: SubmitHandler<ILoginForm> = (formData) => {
    mutate({
      ...formData,
    });
  };
  useMainButton({ text: "Войти", onClick: handleSubmit(onSubmit)});
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-safe-top">
      <div className="w-full">
        <h1 className="text-3xl font-semibold">Вход</h1>
        <form className="space-y-4 mt-6">
          <Field error={formState.errors.username?.message} id="login" placeholder="Логин" type="text" {...register("username", { required: "Введи логин!" })}/>
          <Field error={formState.errors.password?.message} id="password" placeholder="Пароль" type="password" {...register("password", { required: "Введи пароль!" })}/>
        </form>
      </div>
    </div>
  );
}
