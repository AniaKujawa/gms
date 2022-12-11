import { User } from "../../types";

export type UpdateUser = Pick<User, 'firstName' | 'lastName' | 'name'>;