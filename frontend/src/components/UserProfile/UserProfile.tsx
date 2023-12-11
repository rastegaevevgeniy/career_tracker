import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Card, CardContent, Typography, Box, SvgIcon } from '@mui/material';
import './UserProfile.scss';
import { PROFILE_ICON } from "../../utils/constants";
import { useDispatch } from 'react-redux';
import { openSkillsModal } from '../../redux/actions';

const UserProfile: React.FC = () => {

  const dispatch = useDispatch();

  const openSkills = () => {
    dispatch(openSkillsModal());
  };

  return (
    <Card className="user-profile" style={{ borderRadius: 8 }}>
      <CardContent>
        <Box display="flex" flexDirection='row'>
          <SvgIcon>
            {PROFILE_ICON}
          </SvgIcon>
          <Typography variant="h2" component="h2">
            Екатерина
          </Typography>
        </Box>
        <Typography variant="body1" component="p">
          Текущая цель:
        </Typography>
        <Typography variant="body2" component="p">
          Middle аналитик
        </Typography>
        <Button variant="contained" color="primary" onClick={openSkills}>
          Смотреть навыки &rarr;
        </Button>
      </CardContent>
    </Card>
  );
};


export default UserProfile;

