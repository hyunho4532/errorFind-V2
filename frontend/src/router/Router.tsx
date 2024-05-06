import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorWriteBoard from "../view/write/errorWriteBoard.tsx";
import Main from "../view/main/Main.tsx";
import ErrorBoardDetail from "../component/board/detail/ErrorBoardDetail.tsx";
import ErrorFindAverage from "../view/errorfind/average/ErrorFindAverage.tsx";
import Helping from "../view/heping/Helping.tsx";
import HelpingInsert from "../view/heping/insert/HelpingInsert.tsx";

const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/error/write",
        element: <ErrorWriteBoard />
    },
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/error/detail",
        element: <ErrorBoardDetail />
    },
    {
        path: "/error/average",
        element: <ErrorFindAverage />
    },
    {
        path: "/error/helping",
        element: <Helping />
    },
    {
        path: "/error/helping/insert",
        element: <HelpingInsert />
    }
])

export default router;
