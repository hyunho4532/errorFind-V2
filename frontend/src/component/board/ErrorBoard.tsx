import { Card } from '@mui/material';
import './ErrorBoard.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { mouseCardDragHandler, mouseCardLeaveHandler, mouseSwiperDragHandler, mouseSwiperLeaveHandler } from '../../event/hover/MouseEventHover';

function ErrorBoard(props: any) {
    const itemsPerPage = 2;
    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const errorBoardData = props.errorBoardData.slice(startIndex, endIndex);

    const [, setErrorType] = useState('');
    const [, setErrorFile] = useState('');
    const [, setErrorStatus] = useState('');
    const [errorStatusBoardData, setStatusErrorBoardData] = useState([]);

    const deleteOnClick = (uid: string, errorType: string, errorFile: string, e: any) => {
        e.preventDefault();
        setErrorType(errorType);
        setErrorFile(errorFile);
    
        axios.post('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/errorBoardData/delete', {
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

    const onErrorBoardDetail = () => {

    }

    useEffect(() => {
        { errorBoardData.map((error: any) => (
            setErrorStatus(error.errorStatus)
        ))}

        axios.get('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/errorBoardData/get/status')
            .then(response => {
                setStatusErrorBoardData(response.data);
            })
    });

    return (
        <>
            <h2 className='main-component-help-title'>현재 진행 중인 에러를 도와주세요! 😤</h2>
            <Swiper className="main-component-status"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>

                { errorStatusBoardData.map((error: any, index: any) => (
                    <SwiperSlide>
                        <div id="main-component-status-data"
                            onMouseEnter={() => mouseSwiperDragHandler(document.getElementById('main-component-status-data'))}
                            onMouseLeave={() => mouseSwiperLeaveHandler(document.getElementById('main-component-status-data'))}
                            >

                            <Card key={index} className="main-component-status-card">
                                <p>{error.errorType}</p>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 className="main-component-title">최근에 등록한 에러 목록들 🥇</h2>

            <div className="main-component">
                {errorBoardData.map((error: any, index: any) => (
                    <div id={`main-card-${index}`} className="main-card">

                        <Card style={{ height: "260px" }}>
                                <div key={index} id={`main-card-component-${index}`} className="main-card-component"
                                    onMouseEnter={() => mouseCardDragHandler(document.getElementById(`main-card-${index}`), document.getElementById(`main-card-component-${index}`))}
                                    onMouseLeave={() => mouseCardLeaveHandler(document.getElementById(`main-card-${index}`), document.getElementById(`main-card-component-${index}`))}>
                                    
                                    <div className="main-card-board-datas">
                                        <div style={{ display: "flex" }}>
                                            <p className="main-type-text">{error.errorType}</p>
                                            <img onClick={(e) => {
                                                    deleteOnClick(error.authuid, error.errorType, error.errorFile, e)
                                                }} className="main-type-delete" src="../../../public/delete.svg"></img>
                                            
                                            <p className="main-status-text">{error.errorStatus}</p>
                                        </div>

                                        {error.errorFile.length >= 13 ? (
                                            <p onClick={() => onErrorBoardDetail()} className="main-content-text">{`에러 내용: ${error.errorFile.substring(0, 32)}...`}</p>
                                        ) : (
                                            <p onClick={() => onErrorBoardDetail()} className="main-content-text">{`에러 내용: ${error.errorFile}`}</p>
                                        )}
                                        
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
                    </div>
                ))}
            </div>

            <ToastContainer />
        </>
    )
}

export default ErrorBoard;