import { Link } from "react-router-dom"
import { HeaderInfoProps } from "./props/HeaderInfoProps";

function HeaderInfo(props: HeaderInfoProps) {

    const errorInsertClick = () => {
        if (props.userData.email === '') {
            alert('로그인을 먼저 진행해주세요.');
        } else {
            location.href = "/error/write";
        }
    }

    const profileSelect = (userProfileSelect: boolean) => {
        props.setUserProfileSelect(!userProfileSelect);
    }


    return (
        <header className="header-main">
            <img className="header-logo" src="../../../public/errorfind_logo.jpg" />

            <nav className="header-main-funcs">
                <Link to="/error/average" className="header-main-first-func">
                    <div className="header-nav-link">
                        <p>에러 통계</p>
                    </div>
                </Link>

                <Link to="/error/helping" className="header-main-second-func">
                    <div className="header-nav-link">
                        <p>헬핑!</p>
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