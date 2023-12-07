// import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import "./ModalSkill.scss"
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { api } from '../../utils/Api/Api';
import { CLOSE_ICON } from '../../utils/constants';
import { LinearProgress, SvgIcon } from '@mui/material';
import { YourDataType } from '../../utils/Api/ApiConst';
import { closeModal } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const ModalSkill: React.FC = () => {
    const [dataUser, setDataUser] = useState<YourDataType[] | null>(null);

    interface RootState {
        isModalOpen: boolean;
    }

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.isModalOpen);

    useEffect(() => {
        api
            .getInitialTracker()
            .then((data) => setDataUser(data))
            .catch((err) => console.log(`Ошибка ${err}`))

    }, [])

    const style = {
        position: 'fixed',
        top: "138px",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "936px",
        bgcolor: '#F1F3F7',
        padding: "36px 40px",
    };
    const style2 = {
        bgcolor: '#FFF',
        borderRadius: '10px',
        padding: '14px',
    }

    // const style3 = {
    //     // fontFamily: 'YS Text',
    //     fontSize: '14px',
    //     fontStyle: 'normal',
    //     fontWeight: 400,
    //     lineHeight: '20px',
    //     color: '#797981',
    // }

    return (
        <div>
            {isModalOpen !== undefined &&
                <Modal
                    open={isModalOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='title'>
                            <h1 className='title__text'>Навыки</h1>
                            <button className='title__button' onClick={() => dispatch(closeModal())}>
                                <SvgIcon>
                                    {CLOSE_ICON}
                                </SvgIcon>
                            </button>
                        </div>
                        <Box sx={style2}>
                            <div className='block1'>
                                <div className='block1__title'>
                                    <Typography variant="caption" display="block" sx={{ fontSize: '0.84rem', color: '#909099' }}>
                                        Твоя цель
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{
                                        fontFamily: 'Yandex Sans Text, Arial, sans-serif',
                                        fontSize: '23px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        paddingTop: "8px",
                                    }} variant="h6" gutterBottom>
                                        Middle
                                    </Typography>
                                </div>
                                <Box sx={{ width: '572px', display: "grid", alignContent: 'center' }}>
                                    <LinearProgress variant="determinate" value={60} // Сюда закинуть процент расчитанный от показателей бэка
                                        sx={{
                                            height: "12px", borderRadius: '12px',
                                            '& .css-5xe99f-MuiLinearProgress-bar1': { backgroundColor: '#87CC9E', borderRadius: '12px' },
                                            backgroundColor: '#5A9BFF',
                                        }} />
                                </Box>
                            </div>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <div>
                                    {dataUser && dataUser.map((item, index) => (
                                        <div key={index}>
                                            <h1>{item.username}</h1>
                                            {item.profession.map((profession, profIndex) => (
                                                <div key={profIndex}>
                                                    <h2>{profession.name}</h2>
                                                    <p>Level: {profession.level}</p>
                                                    <p>Salary: {profession.salary}</p>
                                                    <ul>
                                                        {profession.skills.map((skill, skillIndex) => (
                                                            <li key={skillIndex}>{skill}</li>
                                                        ))}
                                                    </ul>
                                                    <h3>Courses:</h3>
                                                    {profession.course.map((course, courseIndex) => (
                                                        <div key={courseIndex}>
                                                            <h4>{course.name}</h4>
                                                            <p>Description: {course.description}</p>
                                                            <p>Full Cost: {course.course_cost_full}</p>
                                                            <p>Per Month: {course.course_per_month}</p>
                                                            <a href={course.link_course} target="_blank" rel="noopener noreferrer">Link</a>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </Typography>
                        </Box>
                    </Box>
                </Modal>
            }
            {/* <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <div>
                    <h2 id="simple-modal-title">Modal Title</h2>
                    <p id="simple-modal-description">Modal content goes here.</p>
                </div>
            </Modal> */}
        </div>
    );
};

export default ModalSkill;