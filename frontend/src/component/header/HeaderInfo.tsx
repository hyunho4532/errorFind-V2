import { Link, useNavigate } from "react-router-dom";
import { mouseDragHandler, mouseLeaveHandler } from "../../event/hover/MouseEventHover";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import UserProfileCard from "../card/UserProfileCard";
import { supabase } from "../../config";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import UserSetItem from "../../storage/UserSetItem";

export interface HeaderInfoProps {
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

function HeaderInfo(props: HeaderInfoProps) {
    
    const [email, setEmail] = useState<any>('');
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getUser()
            .then(response => {
                console.log(response.data);
                UserSetItem(response.data.user?.email, response.data.user?.id, response.data.user?.user_metadata.picture);
                setEmail(response.data.user?.email);
            });
    });

    const errorInsertClick = () => {
        if (email === '') {
            alert('로그인을 먼저 진행해주세요.');
        } else {
            navigate('/error/write');
        }
    };

    return (
        <header className="header-main">
            <img 
                className="header-logo" 
                src="../public/movietok_logo.jpg" 
                alt="Error Find Logo"
            />

            <nav className="header-main-funcs">
                <Link to="/error/average" className="header-main-first-func">
                    <div className="header-nav-link1">
                        <p 
                            id="header-nav-text1" 
                            onMouseEnter={() => mouseDragHandler(document.getElementById("header-nav-text1"))}
                            onMouseLeave={() => mouseLeaveHandler(document.getElementById("header-nav-text1"))}>
                            에러 통계 😎
                        </p>
                    </div>
                </Link>

                <Link to="/error/helping" className="header-main-second-func">
                    <div className="header-nav-link2">
                        <p 
                            id="header-nav-text2" 
                            onMouseEnter={() => mouseDragHandler(document.getElementById("header-nav-text2"))}
                            onMouseLeave={() => mouseLeaveHandler(document.getElementById("header-nav-text2"))}>
                            헬핑! 📣
                        </p>
                    </div>
                </Link>

                <Link to="/question" className="header-main-second-func">
                    <div className="header-nav-link3">
                        <p 
                            id="header-nav-text3" 
                            onMouseEnter={() => mouseDragHandler(document.getElementById("header-nav-text3"))}
                            onMouseLeave={() => mouseLeaveHandler(document.getElementById("header-nav-text3"))}>
                            질문 🤗
                        </p>
                    </div>
                </Link>
            </nav>

            { email != null && 
                <div className="header-main-title">
                    <Popover className="reactive">
                        <PopoverButton className="header-main-popover-button">
                            {email}
                        </PopoverButton>

                        <PopoverPanel className="header-main-popover-panel">
                            <UserProfileCard />
                        </PopoverPanel>
                    </Popover>
                </div> 
            }

            <div className="header-div-login">
                {email === undefined && (
                    <button 
                        className="header-login"
                        onClick={() => props.setModalIsOpen(true)}>
                        로그인
                    </button>
                )}
            </div>

            <p className="header-error-write" onClick={errorInsertClick}>에러 등록하기</p>
        </header>
    );
}

export default HeaderInfo;