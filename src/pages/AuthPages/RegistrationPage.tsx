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
import { Colors } from "../../config/colors";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router";

export function RegistrationPage() {
  const navigate = useNavigate()
  const { data, isLoading, isSuccess } = useClasses();
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const role = useAtomValue(roleAtom);

  useBackButton();

  const { register, handleSubmit, reset, formState, watch } = useForm<IRegisterForm>({
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IRegisterForm) => authService.register(data),
    onSuccess() {
      // setIsSubmitting(false);
      navigate('/')
      reset();
    },
    onError() {
      // setIsSubmitting(false);
      WebApp.showAlert("Пользователь с таким юзернеймом уже существует!");
    },
  });


  const watchFields = watch(["username", "password", "firstName", "lastName"]);
  const isFormComplete = !!(watchFields[0] && watchFields[1] && watchFields[2] && watchFields[3]);

  const onSubmit: SubmitHandler<IRegisterForm> = (formData) => {
    WebApp.MainButton.showProgress(); // показываем лоадер

    mutate({
      ...formData,
      role: role.role,
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess && data) {
    WebApp.MainButton.hideProgress();

    return (
    <div className="h-screen flex flex-col bg-black-main">
      <Header>Регистрация</Header>
      <div className="flex flex-col flex-1 justify-center w-full space-y-8">
        <h1 className="text-3xl font-semibold">Регистрация</h1>
        <form className="w-full space-y-4">
          <Field error={formState.errors.username?.message} id="username" placeholder="Придумай юзернейм" type="text" {...register("username", { required: "Введи юзернейм!" })} />
          <Field error={formState.errors.password?.message} id="password" placeholder="Придумай пароль" type="password" {...register("password", { required: "Пароль введи!", minLength: { value: 6, message: "Пароль не менее 6 символов!" } })} />
          <Field error={formState.errors.firstName?.message} id="name" placeholder="Имя" type="text" {...register("firstName", { required: "У тебя че имени нет!?" })} />
          <Field error={formState.errors.lastName?.message} id="lastname" placeholder="Фамилия" type="text" {...register("lastName", { required: "Ты че детдомовский!?" })} />
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
        <MyMainButton 
          text={isPending ? "Отправка формы..." : !isFormComplete ? "Введи все нужные данные!" : "Зарегистрироваться"} 
          textColor={isPending || !isFormComplete ? Colors.accent : Colors.black.main}
          color={isPending || !isFormComplete ? Colors.black.secondary : Colors.accent}
          disabled={!isFormComplete}
          progress={isPending}
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
    </div>
    );
  }

  return <h1 className="text-3xl font-semibold min-h-screen flex flex-col justify-center items-center">Попробуй <span className="text-accent">позже</span></h1>;
}


