import api from "../api";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await api.post("/api/token/refresh/", {
      refresh: localStorage.getItem("token"),
    });
    console.log(response);
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
