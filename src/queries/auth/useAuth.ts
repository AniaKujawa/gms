import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data } = useSession();
  const headers: Record<string, string> = {};

  if (data?.token) {
    headers.Authorization = `Bearer ${data.token}`;
  }

  return { headers, enabled: !!data?.token };
};
