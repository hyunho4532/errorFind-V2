import axios from "axios";
import ErrorSaveButtonProps from "../../component/button/props/ErrorSaveButtonProps";
import { NewUser } from "../../model/NewUser";

const AuthProfileInsert = (json: ErrorSaveButtonProps, newUser: NewUser) => {

    localStorage.setItem('user', JSON.stringify ({
        ...json.userAuthFromJson,
        userData: {
            ...json.userAuthFromJson,
            authuid: newUser.authuid,
            email: newUser.email,
            nickname: newUser.nickname,
            errorhandler: newUser.errorhandler,
            position: newUser.position,
        }
    }));

    const data = {
        authuid: newUser.authuid,
        nickname: newUser.nickname
    }

    axios.post('http://localhost:50000/errorBoardData/update', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error)
        })
};

export default AuthProfileInsert