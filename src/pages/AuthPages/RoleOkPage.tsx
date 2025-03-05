import { useNavigate, useParams } from "react-router";
import { useBackButton } from "../../hooks/useBackButton";
import { useAtom } from "jotai";
import { IRoles } from "../../types/roles.types";
import { roleAtom } from "../../store";
import { useEffect } from "react";
import { MyMainButton } from "../../components/MyMainButton";

export function RoleOkPage() {
  const { role } = useParams<{ role: IRoles['role'] }>();
  const [, setRole] = useAtom(roleAtom);
  const navigate = useNavigate()

  useEffect(() => {
    if (role === 'student' || role === 'teacher') {
      setRole({ role });
    }
  }, [role, setRole]);

  useBackButton();

  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <img className="h-auto max-w-full" src={role === 'teacher' ? '/pic1.svg' : '/pic2.svg'} alt="Role illustration" />
      <h1 className="font-rubik text-2xl font-semibold text-center">
        <span className="text-accent">Хорошо</span>. Теперь заполни свой профиль.
      </h1>
      <MyMainButton text="Продолжить" onClick={() => navigate("/register")}/>
    </div>
  );
}
