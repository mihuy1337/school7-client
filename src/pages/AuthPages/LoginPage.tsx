import { useMutation } from "@tanstack/react-query";
import WebApp from "@twa-dev/sdk";
import { useForm, SubmitHandler } from "react-hook-form";
import { Field } from "../../components/ui/Field";
import { useBackButton } from "../../hooks/useBackButton";
import { authService } from "../../services/auth.service";
import { ILoginForm } from "../../types/auth.types";
import { MyMainButton } from "../../components/MyMainButton";
import { Colors } from "../../config/colors";

export function LoginPage() {
  useBackButton();
  const { register, handleSubmit, reset, watch, formState } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: ILoginForm) => authService.login(data),
    onSuccess() {
      WebApp.showAlert("Ты вошел, остальное в процессе...");
      reset();
    },
    onError() {
      WebApp.showAlert("Проверь пароль и юзернейм!");
      reset();
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = (formData) => {
    mutate(formData);
  };

  // Следим за заполнением полей
  const watchFields = watch(["username", "password"]);
  const isFormComplete = !!(watchFields[0] && watchFields[1]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-safe-tg-top">
      <div className="w-full">
        <h1 className="text-3xl font-semibold">Вход</h1>
        <form className="space-y-4 mt-6">
          <Field
            error={formState.errors.username?.message}
            id="login"
            placeholder="Юзернейм"
            type="text"
            {...register("username", { required: "Введи юзернейм!" })}
          />
          <Field
            error={formState.errors.password?.message}
            id="password"
            placeholder="Пароль"
            type="password"
            {...register("password", { required: "Введи пароль!" })}
          />
        </form>
      </div>

      <MyMainButton
        text={isPending ? "Отправка формы..." : !isFormComplete ? "Введи все нужные данные!" : "Войти"}
        textColor={!isFormComplete || isPending ? Colors.accent : Colors.black.main}
        color={!isFormComplete || isPending ? Colors.black.secondary : Colors.accent}
        disabled={!isFormComplete || isPending}
        progress={isPending}
        onClick={() => handleSubmit(onSubmit)()}
      />
    </div>
  );
}

