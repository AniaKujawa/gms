export type RegisterFormProps = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type Props = {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};
