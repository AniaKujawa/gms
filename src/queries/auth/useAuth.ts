import { useSession } from "next-auth/react"

export const useAuth = () => {
  const { data } = useSession();

  return {
    headers: {
      Authorization: `Bearer ${data?.token}`
    },
    enabled: !!data?.token,
  }
};
