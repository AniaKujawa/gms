export type RegisterFormProps = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
  musician: boolean;
};

export type Props = {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};
