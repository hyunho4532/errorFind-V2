import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import './scss/Main.scss'
import ErrorBoard from "../../component/board/ErrorBoard";
import CustomPagination from "../../component/pagination/CustomPagination";
import ErrorBoardWebType from "../../component/board/web/ErrorBoardWebType";
import Header from "../../component/header/Header";
import { User } from "../../model/User";
import { user } from "../../recoil/Atom";
import { useRecoilState } from "recoil";
import { supabase } from "../../config";
import UserSetItem from "../../storage/UserSetItem";

function Main() {
    const [errorBoardData, setErrorBoardData] = useState([]);
    const [page, setPage] = useState(1);

    const [userData, setUserData] = useRecoilState<User>(user);

    useEffect(() => {
        axios.get("https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/errorBoardData/get")
            .then((response) => {
                setErrorBoardData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        
        console.log(userData);

    }, [userData.email]);

    useMemo(async () => {
        const response = await supabase.auth.getUser()
        console.log(response.data.user?.email);
        UserSetItem(response.data.user?.email, response.data.user?.id, response.data.user?.user_metadata.profile);
    }, [])

    return (
        <>
            <Header userData={userData} setUserData={setUserData} />

            <ErrorBoard errorBoardData={errorBoardData} page={page} />
        
            <CustomPagination errorBoardData={errorBoardData} page={page} setPage={setPage} />

            <ErrorBoardWebType />
        </>
    )
}

export default Main;