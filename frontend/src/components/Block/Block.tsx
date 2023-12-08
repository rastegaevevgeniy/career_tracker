import React from 'react';
import "./Block.scss";
// import CourseCard from "../CourseCard/CourseCard";
import {Typography, Box, List} from '@mui/material';

interface BlockProps {
  children: React.ReactNode;
  title: string;
}

const Block: React.FC<BlockProps> = ({ children, title }) => {
  
  return (
    <Box className="block-container">
      <Typography className="block__title" variant="h6" component="h2">{title}</Typography>
      <List className="block__list">
        {children}
      </List>
    </Box>
  );
}

export default Block;