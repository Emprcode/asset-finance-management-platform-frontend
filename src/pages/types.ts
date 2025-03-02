export interface userFormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export type User = Omit<FormData, "confirmPassword">;

export interface UserApiResponse {
  status: string;
  message: string;
  data?: any;
}
