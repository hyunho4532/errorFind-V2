import { Dispatch, SetStateAction } from "react"
import { User } from "../../../model/User"

export interface AuthInfoDialogProps {
    userData: User
    setUserData: (user: User) => void
    userModalIsOpen: boolean,
    setUserModalIsOpen: Dispatch<SetStateAction<boolean>>,
}