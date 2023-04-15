import { FormEvent } from "react";
import { loginRequest, profileRequest } from "../../api/authService";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //const setToken = useAuthStore((state) => state.setToken);
  const { setToken, setProfile } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);

    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email@gmail.com" />
      <input type="password" placeholder="**********" />
      <button>Login</button>
    </form>
  );
};
export default LoginPage;
