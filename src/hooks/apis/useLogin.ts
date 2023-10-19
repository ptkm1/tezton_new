import { Api } from "../../services/axios";

export default function useLogin() {
  const SignIn = async (payload: any) => {
    try {
      const { data } = await Api.post("/login", payload);
      localStorage.setItem("@tezton/user", JSON.stringify(data.user));
      localStorage.setItem("@tezton/token", JSON.stringify(data.token));
      return data.user;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const SignUp = async (payload: any) => {
    try {
      const { data } = await Api.post("/user/signup", payload);
      alert(data.message);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const GenerateTokenToReset = async (payload: any) => {
    try {
      const { data } = await Api.post("/generate/token", payload);
      alert("Redirecionaremos você, Digite sua nova senha na proxima tela");
      console.log(data, "<data");
      return data.token;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const RecoveryPassword = async (
    token: string,
    payload: { newPassword: string }
  ) => {
    try {
      const { data } = await Api.put(`/forgot/password/${token}`, payload);
      alert("Senha atualizada");
      console.log(data);

      window.location.href = "/";
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return {
    SignIn,
    SignUp,
    RecoveryPassword,
    GenerateTokenToReset,
  };
}
