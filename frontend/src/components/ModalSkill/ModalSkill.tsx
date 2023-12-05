// import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { api } from '../../utils/Api/Api';
import { CLOSE_ICON } from '../../utils/constants';
import { SvgIcon } from '@mui/material';

const ModalSkill = () => {
    const [isModalOpen, setModalOpen] = useState(true);
    const [test, setTest] = useState(null);

    useEffect(() => {
        api
            .getInitialTracker()
            .then((data) => setTest(data))
            .catch((err) => console.log(`Ошибка ${err}`))

    }, [])

    const style = {
        position: 'absolute' as 'absolute',
        top: "70px",
        right: '0',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        width: "924px",
        maxHeight: "1428px",
        bgcolor: '#F1F3F7',
        // border: '2px solid #000',
        // boxShadow: 24,
        p: 4,
    };

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Навыки</h1>
                    <SvgIcon>
                        {CLOSE_ICON}
                    </SvgIcon>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {test}
                    </Typography>
                </Box>
            </Modal>
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