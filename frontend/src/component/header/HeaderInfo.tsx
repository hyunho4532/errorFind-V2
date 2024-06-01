import { Link } from "react-router-dom"
import { HeaderInfoProps } from "./props/HeaderInfoProps";
import { mouseDragHandler, mouseLeaveHandler } from "../../event/hover/MouseEventHover";
import { useNavigate } from "react-router-dom";

function HeaderInfo(props: HeaderInfoProps) {

    const navigate = useNavigate();

    const errorInsertClick = () => {
        if (props.userData.email === '') {
            alert('로그인을 먼저 진행해주세요.');
        } else {
            navigate('/error/write');
        }
    }

    const profileSelect = (userProfileSelect: boolean) => {
        props.setUserProfileSelect(!userProfileSelect);
    }


    return (
        <header className="header-main">
            <img className="header-logo" src="../../dist/errorfind_logo.jpg" />

            <nav className="header-main-funcs">
                <Link to="/error/average" className="header-main-first-func">
                    <div className="header-nav-link1">
                        <p id="header-nav-text1" 
                            onMouseEnter={() => mouseDragHandler(document.getElementById("header-nav-text1"))}
                            onMouseLeave={() => mouseLeaveHandler(document.getElementById("header-nav-text1"))}>
                                에러 통계 😎
                        </p>
                    </div>
                </Link>

                <Link to="/error/helping" className="header-main-second-func">
                    <div className="header-nav-link2">
                        <p id="header-nav-text2" 
                            onMouseEnter={() => mouseDragHandler(document.getElementById("header-nav-text2"))}
                            onMouseLeave={() => mouseLeaveHandler(document.getElementById("header-nav-text2"))}>
                                헬핑! 📣
                        </p>
                    </div>
                </Link>

                <Link to="/error/helping" className="header-main-second-func">
                    <div className="header-nav-link3">
                        <p id="header-nav-text3" 
                            onMouseEnter={() => mouseDragHandler(document.getElementById("header-nav-text2"))}
                            onMouseLeave={() => mouseLeaveHandler(document.getElementById("header-nav-text2"))}>
                                질문 🤗
                        </p>
                    </div>
                </Link>
            </nav>

            <div className="header-main-title">
                <p className="header-main-email" onClick={() => profileSelect(props.userProfileSelect)}>{props.userData.email}</p>

                {
                    props.userData.email === '' 
                    ? <button className="header-login" onClick={() => props.setModalIsOpen(true)}>로그인</button>
                    : ''
                }

                
                <p className="header-error-write" onClick={errorInsertClick}>에러 등록하기</p>
            </div>
        </header>
    )
}

export default HeaderInfo