import { getServerSession } from "next-auth/next";
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export const getSession = async(context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  return session;
}