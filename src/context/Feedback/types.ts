import { ReactNode } from "react";

export type Warning = 'success' | 'error' | 'warning' | 'info' | undefined;

export type Alert = {
  message: string;
  warningLevel: Warning;
  isOpened?: boolean;
}

export type FeedbackContextProps = {
  alert: Alert;
  setAlert: (alert: Alert) => void;
};

export type Props = {
  children: ReactNode;
}
