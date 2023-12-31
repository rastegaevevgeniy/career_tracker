import React from 'react';
import { Grid, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Skills.scss";
import { Skill } from '../../utils/Api/ApiConst';


interface SkillsProps {
  dataSkills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ dataSkills }) => {

  return (
    <div>
      {dataSkills.map((item, index) => (
        <div key={index} className='block__skill'>
          <Typography variant="caption" className="block__title"
            sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line' }}>
            {typeof item === 'object' ? item.p : item}
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>

              {Array.isArray(item.name) ?
                item.name.map((el, idx) => (
                  <Grid item xs="auto" key={idx}>
                    <ListItem sx={typeof item === 'object' ? item.color :
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
