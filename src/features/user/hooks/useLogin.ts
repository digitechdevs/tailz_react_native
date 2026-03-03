import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth";
import { LoginFormData } from "../validation/login";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginFormData) => loginApi(data),
    onSuccess: async (data) => {
      // Assuming the API returns a token in data.token
      if (data.token) {
        await AsyncStorage.setItem("userToken", data.token);
      }
      console.log("Login success", data);
      // Route to dashboard/home after successful login
      // router.replace("/(tabs)");
    },
    onError: (error) => {
      console.error("Login error:", error);
      // Handle error (e.g., show a toast or alert)
    },
  });
};
