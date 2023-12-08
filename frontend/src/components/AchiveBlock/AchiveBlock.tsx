import React from 'react';
import "./AchiveBlock.scss";
import AchiveCard from "../AchiveCard/AchiveCard";
import {Box, Typography, List, ListItem} from '@mui/material';
import achivements from "../../utils/Data/Achivements.js"

const AchiveBlock: React.FC = () => {

  return (
    <Box className="achive-container">
      <Typography className="achive-container__title" variant="h6" component="h2">Последние достижения</Typography>
        <List className="achive-container__list">
            {achivements.map((achivement) => (
                <ListItem key={achivement.id}>
                  <AchiveCard 
                    title={achivement.title}
                    date={achivement.date}
                    image={achivement.image}
                    description={achivement.description}
                  />
                </ListItem>
              ))
            }
      </List>
  </Box>
  );
}

export default AchiveBlock;