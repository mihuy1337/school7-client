import { Field } from "../../components/ui/Field";
import { useBackButton } from "../../hooks/useBackButton";
import { useClasses } from "../../hooks/useClasses";
import { Loading } from "../../components/Loading";
import WebApp from "@twa-dev/sdk";
import { useAtomValue } from "jotai";
import { roleAtom } from "../../store";
import { IRegisterForm } from "../../types/auth.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { authService } from "../../services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { MyMainButton } from "../../components/MyMainButton";
import { useState } from "react";
import { Colors } from "../../config/colors";

export function RegistrationPage() {
  const { data, isLoading, isSuccess } = useClasses();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const role = useAtomValue(roleAtom);

  useBackButton();

  const { register, handleSubmit, reset, formState, watch } = useForm<IRegisterForm>({
    mode: "onChange",
  });

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IRegisterForm) => authService.register(data),
    onSuccess() {
      setIsSubmitting(false);
      WebApp.showAlert("Ты зарегистрирован, остальное в процессе...");
      reset();
    },
    onError() {
      setIsSubmitting(false);
      WebApp.showAlert("Какая-то ошибка...");
    },
  });


  const watchFields = watch(["username", "password", "firstName", "lastName"]);
  const isFormComplete = !!(watchFields[0] && watchFields[1] && watchFields[2] && watchFields[3]);

  const onSubmit: SubmitHandler<IRegisterForm> = (formData) => {
    setIsSubmitting(true);
    WebApp.MainButton.showProgress(); // показываем лоадер

    mutate({
      ...formData,
      role: role.role,
    });
  };

  if (isLoading) {
    WebApp.MainButton.show()
    WebApp.MainButton.showProgress();
    WebApp.MainButton.setParams({
      text: "Идет загрузка...",
      color: Colors.black.secondary,
      text_color: Colors.accent,
    })
    return <Loading />;
  }

  if (isSuccess && data) {
    WebApp.MainButton.hideProgress();

    return (
      <div className="min-h-screen flex flex-col justify-center items-center pt-safe-top">
        <div className="w-full">
          <h1 className="text-3xl font-semibold">Регистрация</h1>
          <form className="space-y-4 mt-6">
            <Field error={formState.errors.username?.message} id="login" placeholder="Придумай логин" type="text" {...register("username", { required: "Введи логин!" })} />
            <Field error={formState.errors.password?.message} id="password" placeholder="Придумай пароль" type="password" {...register("password", { required: "Пароль введи!", minLength: { value: 6, message: "Пароль не менее 6 символов!" } })} />
            <Field error={formState.errors.firstName?.message} id="name" placeholder="Имя" type="text" {...register("firstName", { required: "У тебя че имени нет!?" })} />
            <Field error={formState.errors.lastName?.message} id="lastname" placeholder="Фамилия" type="text" {...register("lastName", { required: "Ты че детдомовский?!" })} />
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

        <MyMainButton 
          text={isSubmitting ? "Отправка формы..." : !isFormComplete ? "Введи все нужные данные!" : "Зарегистрироваться"} 
          textColor={isSubmitting || !isFormComplete ? Colors.accent : Colors.black.main}
          color={isSubmitting || !isFormComplete ? Colors.black.secondary : Colors.accent}
          disabled={!isFormComplete}
          progress={isSubmitting}
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
    );
  }

  return <h1 className="text-3xl font-semibold min-h-screen flex flex-col justify-center items-center">Попробуй <span className="text-accent">позже</span></h1>;
}


