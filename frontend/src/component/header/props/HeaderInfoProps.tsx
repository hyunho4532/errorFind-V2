import { Dispatch, SetStateAction } from "react";
import { User } from "../../../model/User";

export interface HeaderInfoProps {
    userData: User,
    userProfileSelect: boolean,
    setUserProfileSelect: Dispatch<SetStateAction<boolean>>,
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}