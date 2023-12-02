import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Card, CardContent, Typography } from '@mui/material';
import './UserProfile.scss';

// interface UserProfileProps {
//   user: {
//     name: string;
//     email: string;
//     bio: string;
//   };
//   onViewSkillsClick: () => void;
// }

const UserProfile: React.FC = () => {
  return (
    <Card className="user-profile">
      <CardContent>
        <Typography variant="h2" component="h2">
          Екатерина
        </Typography>
        <Typography variant="body1" component="p">
          Текущая цель:
        </Typography>
        <Typography variant="body2" component="p">
          Middle аналитик
        </Typography>
        <Button variant="contained" color="primary">
          Смотреть навыки &rarr;
        </Button>
      </CardContent>
    </Card>
  );
};

// UserProfile.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     bio: PropTypes.string,
//   }).isRequired,
//   onViewSkillsClick: PropTypes.func.isRequired,
// };

export default UserProfile;

