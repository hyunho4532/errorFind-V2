import { User } from "../../../model/User";

export interface HeaderProps {
    userData: User
    setUserData: (user: User) => void
}