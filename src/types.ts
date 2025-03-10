export interface userFormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export type User = Omit<userFormData, "confirmPassword">;

export interface ApiResponse {
  status: string;
  message: string;
  result?: any;
}

export interface UserProfileProps {
  user: User | null;
}

export interface ApplicationFormData {
  legalName: string;
  address: string;
  phoneNumber: string;
  assets: { description: string; value: string }[];
  income: { description: string; value: string }[];
  expenses: { description: string; value: string }[];
  liabilities: { description: string; value: string }[];
}

export interface ApplicationFormProps {
  initialData?: ApplicationFormData;
  onSubmit: (data: ApplicationFormData) => void;
  buttonValue: string;
}

export interface ApplicationCardProps extends ApplicationFormData {
  appNumber: number;
  handleOnDelete: (_id: string) => void;
  _id: string;
  application: object;
}

export interface EditApplicationProps {
  application: ApplicationFormData;
}
