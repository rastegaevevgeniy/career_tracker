import React from 'react';
import { Grid, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../ModalSkill/ModalSkill.scss";

const Skills = () => {

    const dataSkills = [
        {
            p: 'Уже усвоено',
            color: { backgroundColor: '#87CC9E', borderRadius: '6px' },
            name: ['Экономика и бизнес-модель продукта', 'dfyz', 'ofgaorf', 'fddgvna;ijnv;osnhdiouv;iabv']
        },
        {
            p: 'Нужно освоить',
            color: { backgroundColor: '#ACCCFF', borderRadius: '6px' },
            name: ['Экономика и бизнес-модель продукта', 'dfyz']
        },
        {
            p: 'Текущий курс',
            color: { backgroundColor: '#FFDDE5', borderRadius: '6px' },
            name: ['Экономика и бизнес-модель продукта', 'dfyz']
        },
        {
            p: `Рекомендованные  \nкурсы`,
            color: { backgroundColor: '#F3F3F3', borderRadius: '6px' },
            name: ['Экономика и бизнес-модель продукта', 'dfyz']
        },
        // {
        //     p: 'Осталось учиться',
        //     name: ['3 месяца из 12']
        // },
    ];

    return (
        <div>
            {dataSkills.map((item, index) => (
                <div key={index} className='block__skill'>
                    <Typography variant="caption" display="block__title"
                        sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line' }}>
                        {typeof item === 'object' ? item.p : item}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>

                            {Array.isArray(item.name) ?
                                item.name.map((el, idx) => (
                                    <Grid item xs={4}>
                                        <ListItem key={idx} sx={typeof item === 'object' ? item.color :
                                            undefined}>
                                            {el}
                                        </ListItem>
                                    </Grid>)) : undefined}

                        </Grid>
                    </Box>
                </div>
            ))}
        </div>
    )
}

export default Skills;
