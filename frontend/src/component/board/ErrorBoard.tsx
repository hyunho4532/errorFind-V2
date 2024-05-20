import { Card } from '@mui/material';
import './ErrorBoard.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function ErrorBoard(props: any) {
    const itemsPerPage = 2;
    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const errorBoardData = props.errorBoardData.slice(startIndex, endIndex);

    const [errorType, setErrorType] = useState('');
    const [errorFile, setErrorFile] = useState('');

    const deleteOnClick = (uid: string, errorType: string, errorFile: string, e: any) => {
        e.preventDefault();
        setErrorType(errorType);
        setErrorFile(errorFile);
    
        axios.post('http://localhost:50000/errorBoardData/delete', {
            uid: uid,
            errorType: errorType,
            errorFile: errorFile
        })
            .then(response => {
                if (response.status == 200) {
                    toast.success("데이터 삭제 완료!")
                }
            })
            .catch(error => {
                if (error) {
                    toast.error("데이터 삭제 중 오류가 발생했습니다");
                }
            });
    }

    useEffect(() => {
        console.log(errorType);
        console.log(errorFile);
    }, [errorType, errorFile]);

    return (
        <>

            <h2 className='main-component-help-title'>이러한 에러를 도와주세요!</h2>
            <Swiper className="main-component-swiper"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>

                { errorBoardData.map((error: any, index: any) => (
                    <SwiperSlide key={index}>{error.errorType}</SwiperSlide>
                ))}
            </Swiper>

            <h2 className="main-component-title">최근에 등록한 에러 목록들 🥇</h2>

            <div className="main-component">
                {errorBoardData.map((error: any, index: any) => (
                    <Card className="main-card">
                            <div key={index} className="main-card-component">
                                
                                <div className="main-card-board-datas">
                                    <div style={{ display: "flex" }}>
                                        <p className="main-type-text">{error.errorType}</p>
                                        <img onClick={(e) => {
                                                deleteOnClick(error.authuid, error.errorType, error.errorFile, e)
                                            }} className="main-type-delete" src="../../../public/delete.svg"></img>
                                    </div>

                                    <Link to={`http://localhost:50000/detail?author=${error.author}&uid=${error.authuid}&type=${error.errorType}&profile=${error.profile}&date=${error.formattedDate}&content=${error.errorFile}&situation=${error.errorSituation}`} className="main-link-style">
                                        {error.errorFile.length >= 13 ? (
                                            <p className="main-content-text">{`에러 내용: ${error.errorFile.substring(0, 32)}...`}</p>
                                        ) : (
                                            <p className="main-content-text">{`에러 내용: ${error.errorFile}`}</p>
                                        )}
                                    </Link>
                                    
                                    <div className="main-card-board-data">
                                        <p className="main-author-text">{error.author}</p>
                                        <img className="main-profile" src={error.profile} width="50px" height="50px" />
                                    </div>

                                    <div>
                                        <p className="main-formatted-date-text">{error.formattedDate}</p>
                                    </div>
                                </div>
                            </div>
                    </Card>
                ))}
            </div>

            <ToastContainer />
        </>
    )
}

export default ErrorBoard;