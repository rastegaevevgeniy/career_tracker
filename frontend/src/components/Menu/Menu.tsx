import React from 'react';
import "./Menu.scss";
import UserProfile from '../UserProfile/UserProfile';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SvgIcon from "@mui/material/SvgIcon";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { styled } from '@mui/material/styles';
import {
  VACANCIES_ICON,
  WORKSHOP_ICON,
  DIARY_ICON,
  TRACKER_ICON,
  CONTACTS_ICON,
  LOGOUT_ICON,
} from "../../utils/constants";


const CustomDivider = styled(Divider)({
  backgroundColor: '#B5B5B7',
  width: '90%',
  margin: '0 auto',
});

// const CustomItemText = styled(Divider)({
  
// });

// const StyledIcon = styled(Box)(({ }) => ({
//   width: '24px',
//   height: '24px',
//   backgroundImage: `url(${icon})`,
//   backgroundSize: 'cover',
//   // marginRight: theme.spacing(1),
//   color: '#B5B5B7',
// }));


const Menu: React.FC = () => {

  return (
    <div className="menu">

      <UserProfile />

      <Box sx={{ width: '100%' }} className="menu__container-top">
        <nav aria-label="vacancies workshop diary">
          <List>
            {['Вакансии', 'Мастерская', 'Дневник'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 &&
                      <SvgIcon>
                        {VACANCIES_ICON}
                      </SvgIcon>
                    }
                    {index === 1 &&
                      <SvgIcon>
                        {WORKSHOP_ICON}
                      </SvgIcon>
                    }
                    {index === 2 &&
                      <SvgIcon>
                        {DIARY_ICON}
                      </SvgIcon>
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <CustomDivider />
        <nav aria-label="tracker">
          <List>
            {['Трекер'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 &&
                      <SvgIcon>
                        {TRACKER_ICON}
                      </SvgIcon>
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <CustomDivider />
        <nav aria-label="contacts">
          <List>
            {['Контакты'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 &&
                      <SvgIcon>
                        {CONTACTS_ICON}
                      </SvgIcon>
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>


      <Box sx={{ width: '100%' }} className="menu__container-bottom">
        <CustomDivider />
        <nav aria-label="info logout">
          <List>
            {['Инфо профиля', 'Выход'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 &&
                      <SettingsOutlinedIcon sx={{ color: '#B5B5B7' }}/>
                    }
                    {index === 1 &&
                      <SvgIcon>
                        {LOGOUT_ICON}
                      </SvgIcon>
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
}

export default Menu