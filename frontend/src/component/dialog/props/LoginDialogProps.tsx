import { Dispatch, SetStateAction } from "react"
import { User } from "../../../model/User"

export interface LoginDialogProps {
    userData: User
    setUserData: (user: User) => void
    modalIsOpen: boolean,
    setModalIsOpen: Dispatch<SetStateAction<boolean>>,
    setUserModalIsOpen: Dispatch<SetStateAction<boolean>>,
}