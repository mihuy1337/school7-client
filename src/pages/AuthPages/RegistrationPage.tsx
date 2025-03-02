import { Field } from "../../components/ui/Field";
import { useBackButton } from "../../hooks/useBackButton";
import { useMainButton } from "../../hooks/useMainButton";
import { useClasses } from "../../hooks/useClasses";
import { Loading } from "../../components/Loading";
import WebApp from "@twa-dev/sdk";
import { useAtomValue } from "jotai";
import { roleAtom } from "../../store";
import { IRegisterForm } from "../../types/auth.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { authService } from "../../services/auth.service";
import { useMutation } from "@tanstack/react-query";

export function RegistrationPage() {
  const { data, isLoading, isSuccess } = useClasses();
  const role = useAtomValue(roleAtom);

  const { register, handleSubmit, reset } = useForm<IRegisterForm>({
    mode: "onChange",
  });

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IRegisterForm) => authService.register(data),
    onSuccess() {
      reset();
    },
  });

  const onSubmit: SubmitHandler<IRegisterForm> = (formData) => {
    console.log("Данные формы перед отправкой:", formData);
    mutate({
      ...formData,
      role: role.role, // Добавляем роль перед отправкой
    });
  };

  useBackButton();
  useMainButton({ 
    text: "Зарегистрироваться", 
    disabled: isLoading,  
    onClick: () => {
      console.log("Кнопка нажата!"); // 👈 Проверяем, вызывается ли обработчик
      handleSubmit(onSubmit)()}
  });

  if (isLoading) {
    WebApp.MainButton.showProgress();
    return <Loading />;
  }

  if (isSuccess && data) {
    WebApp.MainButton.hideProgress();
    return (
      <div className="min-h-screen flex flex-col justify-center items-center pt-safe-top">
        <div className="w-full">
          <h1 className="text-3xl font-semibold">Регистрация</h1>
          <form className="space-y-4 mt-6">
            <Field id="login" placeholder="Придумай логин" type="text" {...register("username", { required: "Введи логин!" })} />
            <Field id="password" placeholder="Придумай пароль" type="password" {...register("password", { required: "Пароль введи!" })} />
            <Field id="name" placeholder="Имя" type="text" {...register("firstName", { required: "У тебя че имени нет!?" })} />
            <Field id="lastname" placeholder="Фамилия" type="text" {...register("lastName", { required: "Ты че детдомовский?!" })} />
            <Field id="middlename" placeholder="Отчество (если есть)" type="text" {...register("middleName")} />
            
            {role.role === "student" && (
              <select
                id="role"
                {...register("classId", { required: "Выбери класс!" })}
                className="appearance-none focus:outline-none border-2 border-transparent focus:border-accent focus:ring-accent transition-all duration-300 p-4 w-full bg-black-secondary text-hint font-medium text-white-main text-base rounded-xl"
              >
                {data.map((c) => (
                  <option key={c.id} value={c.id} className="text-white-main p-4">
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

  return <h1 className="text-3xl font-semibold min-h-screen flex flex-col justify-center items-center">Попробуй <span className="text-accent">позже</span></h1>;
}
