import { User } from "../../model/User";
import axios from "axios";

const userInfoInsert = (userData: User) => {
    const data = {
        id: userData.authuid,
        email: userData.email,
        nickname: userData.nickname,
        errorhandler: userData.errorhandler,
        profile: userData.profile,
    }
    
    console.log(userData.authuid);
    console.log(userData.profile);

    localStorage.setItem('user', JSON.stringify({ userData }));

    axios.post('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/userData', data)
        .then((response) => {
            console.log('응답 받음: ', response.data);
        })
        .catch(error => {
            console.error('응답 오류: ', error);
        })
}

export default userInfoInsert