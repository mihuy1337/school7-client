import { useNavigate, useParams } from "react-router";
import pic2 from "../../assets/pic2.svg";
import pic1 from "../../assets/pic1.svg";
import { useBackButton } from "../../hooks/useBackButton";
import { useMainButton } from "../../hooks/useMainButton";
import { useAtom } from "jotai";
import { IRoles } from "../../types/roles.types";
import { roleAtom } from "../../store";
import { useEffect } from "react";

export function RoleOkPage() {
  const { role } = useParams<{ role: IRoles['role'] }>();
  const [, setRole] = useAtom(roleAtom);
  const navigate = useNavigate()

  useEffect(() => {
    if (role === 'student' || role === 'teacher') {
      setRole({ role });
    }
  }, [role, setRole]);

  useMainButton({ text: 'Продолжить',  onClick: () => navigate("/register")});
  useBackButton();

  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <img className="h-auto max-w-full" src={role === 'teacher' ? pic1 : pic2} alt="Role illustration" />
      <h1 className="font-rubik text-2xl font-semibold text-center">
        <span className="text-accent">Хорошо</span>. Теперь заполни свой профиль.
      </h1>
    </div>
  );
}
