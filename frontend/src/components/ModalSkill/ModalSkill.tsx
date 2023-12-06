// import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import "./ModalSkill.scss"
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { api } from '../../utils/Api/Api';
import { CLOSE_ICON } from '../../utils/constants';
import { SvgIcon } from '@mui/material';
import { YourDataType } from '../../utils/Api/ApiConst';
import { closeModal } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const ModalSkill: React.FC = () => {
    const [test, setTest] = useState<YourDataType[] | null>(null);

    interface RootState {
        isModalOpen: boolean;
    }

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.isModalOpen);

    useEffect(() => {
        api
            .getInitialTracker()
            .then((data) => setTest(data))
            .catch((err) => console.log(`Ошибка ${err}`))

    }, [])

    const style = {
        position: 'fixed',
        top: "800px",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "924px",
        bgcolor: '#F1F3F7',
        padding: "34px",
    };
    const style2 = {
        bgcolor: '#FFF',
        borderRadius: '10px',
    }

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

                            <Typography >
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <div>
                                    {test && test.map((item, index) => (
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