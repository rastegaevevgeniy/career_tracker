import React from 'react';
import { Grid, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Skills.scss";

interface Skill {
  p: string;
  color: React.CSSProperties;
  name: string[];
}

interface SkillsProps {
  dataSkills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ dataSkills }) => {

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
