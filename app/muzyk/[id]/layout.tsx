// import { DashboardLayout } from "../../../src/layout/DashboardLayout";

export const metadata = {
  title: 'Music',
  description: 'Music profile',
};

type Props = {
  readonly children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}