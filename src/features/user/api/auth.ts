import { apiClient } from "../../../core/api/api-client";
import { LoginFormData } from "../validation/login";

export const loginApi = async (data: LoginFormData) => {
  const response = await apiClient.post("/api/auth/login", data);
  return response.data;
};
