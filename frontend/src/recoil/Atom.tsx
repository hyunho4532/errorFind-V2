import { atom, selector } from "recoil";
import { ErrorBoard } from "../model/ErrorBoard";
import { PageList } from "../model/PageList";
import { User } from "../model/User";
import SelectPlatform from "../model/SelectPlatForm";
import { ThemeFlag } from "../model/ThemeFlag";
import State from "../model/State";

export const errorBoard = atom<ErrorBoard>({
    key: "errorBoard",
    default: {
        authuid: "",
        selectedPlatform: "",
        errorType: "",
        errorFile: "",
        errorSituation: "",
        profile: ""
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
        profile: ""
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

export const themeState = atom<ThemeFlag>({
    key: "themeState",
    default: ThemeFlag.light,
})

export const state = atom<string>({
    key: 'state',
    default: ''
});
  
export const selectorState = selector<string>({
    key: 'Selector',
    get: ({ get }) => {
        const value = get(state);
        return value;
    },
    set: ({ set }, newValue) => {
        set(state, newValue);
    },
});