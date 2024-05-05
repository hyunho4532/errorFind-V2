import { atom } from "recoil";
import { ErrorBoard } from "../model/ErrorBoard";
import { PageList } from "../model/PageList";
import { User } from "../model/User";
import SelectPlatform from "../model/SelectPlatForm";

export const errorBoard = atom<ErrorBoard>({
    key: "errorBoard",
    default: {
        authuid: "",
        selectedPlatformData: "",
        errorTypeData: "",
        errorFileData: "",
        errorSituationData: ""
    }
});

export const pageCount = atom<PageList>({
    key: "pageCount",
    default: {
        pageCount: 1
    }
})

export const user = atom<User>({
    key: "user",
    default: {
        authuid: "",
        email: "",
        nickname: "",
        position: "",
        errorhandler: "",
    }
})

export const selectPlatform = atom<SelectPlatform>({
    key: "selectPlatform",
    default: {
        android: "",
        web: "",
        devops: "",
    }
})