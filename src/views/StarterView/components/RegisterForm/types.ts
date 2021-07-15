export type RegisterFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Props = {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};