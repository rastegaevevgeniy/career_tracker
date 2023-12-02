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
import { styled } from '@mui/material/styles';
// import diaryIcon from '../../images/diary-icon.svg';
// import icon from '../../images/Vector.png';


const CustomDivider = styled(Divider)({
  backgroundColor: '#B5B5B7',
  width: '90%',
  margin: '0 auto',
});

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

      <Box sx={{ width: '100%' }}>
        <nav aria-label="vacancies workshop diary">
          <List>
            {['Вакансии', 'Мастерская', 'Дневник'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 &&
                      <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.334 4.66699H2.66732C1.93094 4.66699 1.33398 5.26395 1.33398 6.00033V12.667C1.33398 13.4034 1.93094 14.0003 2.66732 14.0003H13.334C14.0704 14.0003 14.6673 13.4034 14.6673 12.667V6.00033C14.6673 5.26395 14.0704 4.66699 13.334 4.66699Z" stroke="#B5B5B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.6663 14V3.33333C10.6663 2.97971 10.5259 2.64057 10.2758 2.39052C10.0258 2.14048 9.68663 2 9.33301 2H6.66634C6.31272 2 5.97358 2.14048 5.72353 2.39052C5.47348 2.64057 5.33301 2.97971 5.33301 3.33333V14" stroke="#B5B5B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </SvgIcon>
                    }
                    {index === 1 &&
                      <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M11.5 9.70213V7.44894C11.5 7.31439 11.5 7.24712 11.4809 7.18772C11.464 7.1352 11.4363 7.08736 11.4 7.04767C11.359 7.00278 11.3028 6.97269 11.1904 6.91252L8 5.20411M2.4 5.95378V11.0565C2.4 11.3353 2.4 11.4747 2.44061 11.5968C2.47652 11.7047 2.53503 11.8023 2.61166 11.8823C2.69835 11.9726 2.81669 12.0307 3.05335 12.1469L7.53335 14.3459C7.70501 14.4302 7.79084 14.4723 7.88026 14.489C7.95949 14.5037 8.04051 14.5037 8.11974 14.489C8.20916 14.4723 8.29499 14.4302 8.46665 14.3459L12.9467 12.1469C13.1833 12.0307 13.3016 11.9726 13.3883 11.8823C13.465 11.8023 13.5235 11.7047 13.5594 11.5968C13.6 11.4747 13.6 11.3353 13.6 11.0565V5.95378M1 5.20411L7.74956 1.58986C7.84139 1.54069 7.8873 1.5161 7.93546 1.50643C7.97811 1.49786 8.02189 1.49786 8.06454 1.50643C8.1127 1.5161 8.15861 1.54069 8.25044 1.58986L15 5.20411L8.25044 8.81836C8.15861 8.86753 8.1127 8.89211 8.06454 8.90179C8.02189 8.91036 7.97811 8.91036 7.93546 8.90179C7.8873 8.89211 7.84139 8.86753 7.74956 8.81836L1 5.20411Z" stroke="#B5B5B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </SvgIcon>
                    }
                    {index === 2 &&
                      <SvgIcon>
                        {/* component={DiaryIcon} inheritViewBox */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none">
                          <path d="M12.168 8.5V20.5M12.168 8.5C12.8465 5.86834 15.4094 4.52459 20.9894 4.5C21.0786 4.49967 21.167 4.51669 21.2495 4.55008C21.3319 4.58346 21.4069 4.63256 21.47 4.69453C21.533 4.7565 21.583 4.83013 21.617 4.91116C21.651 4.99219 21.6683 5.07903 21.668 5.16667V17.1667C21.668 17.3435 21.5965 17.513 21.4692 17.6381C21.342 17.7631 21.1694 17.8333 20.9894 17.8333C15.5608 17.8333 13.4636 18.9088 12.168 20.5C10.88 18.9167 8.77511 17.8333 3.34654 17.8333C2.92753 17.8333 2.66797 17.4979 2.66797 17.0863V5.16667C2.66764 5.07903 2.68496 4.99219 2.71894 4.91116C2.75292 4.83013 2.80289 4.7565 2.86597 4.69453C2.92905 4.63256 3.00399 4.58346 3.08647 4.55008C3.16895 4.51669 3.25734 4.49967 3.34654 4.5C8.92652 4.52459 11.4894 5.86834 12.168 8.5Z" stroke="#B5B5B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M18 17H6V7" stroke="#B5B5B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M17 8L12 13L10 11L6 15" stroke="#B5B5B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M17 10.5V8H14.5" stroke="#B5B5B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M9.4544 3.77777C10.1357 3.91011 10.7619 4.24184 11.2528 4.73051C11.7436 5.21917 12.0768 5.84254 12.2098 6.52083M9.4544 1C10.8699 1.15655 12.1899 1.78762 13.1977 2.78959C14.2054 3.79155 14.841 5.10486 15 6.51388M6.78762 9.23823C5.94945 8.4038 5.28761 7.4603 4.80211 6.45362C4.76035 6.36704 4.73947 6.32374 4.72343 6.26895C4.66642 6.07426 4.70737 5.8352 4.82596 5.67031C4.85933 5.62392 4.8992 5.58423 4.97894 5.50484C5.22281 5.26206 5.34475 5.14067 5.42447 5.0186C5.72511 4.55826 5.72511 3.9648 5.42447 3.50446C5.34475 3.3824 5.22281 3.26101 4.97894 3.01822L4.84301 2.8829C4.4723 2.51384 4.28694 2.32931 4.08787 2.22907C3.69196 2.02972 3.22441 2.02972 2.8285 2.22907C2.62943 2.32931 2.44408 2.51384 2.07337 2.8829L1.96341 2.99237C1.59396 3.36016 1.40924 3.54406 1.26816 3.79408C1.11161 4.07151 0.999055 4.50241 1.00001 4.82062C1.00086 5.10739 1.05674 5.30337 1.16849 5.69535C1.76907 7.80187 2.90224 9.78962 4.568 11.4479C6.23376 13.1063 8.23042 14.2344 10.3464 14.8323C10.7401 14.9435 10.937 14.9991 11.2251 15C11.5447 15.0009 11.9775 14.8889 12.2562 14.733C12.5073 14.5926 12.6921 14.4087 13.0615 14.0409L13.1715 13.9314C13.5422 13.5624 13.7275 13.3778 13.8282 13.1797C14.0285 12.7855 14.0285 12.3201 13.8282 11.9259C13.7275 11.7277 13.5422 11.5432 13.1715 11.1742L13.0355 11.0388C12.7917 10.796 12.6697 10.6747 12.5471 10.5953C12.0847 10.296 11.4886 10.296 11.0262 10.5953C10.9036 10.6747 10.7816 10.796 10.5378 11.0388C10.458 11.1182 10.4182 11.1579 10.3715 11.1911C10.2059 11.3092 9.96578 11.35 9.77022 11.2932C9.71519 11.2772 9.6717 11.2564 9.58472 11.2149C8.57352 10.7315 7.62579 10.0727 6.78762 9.23823Z" stroke="#B5B5B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </SvgIcon>
                    }
                  </ListItemIcon>
                  {/* {index === 0 && <StyledIcon />} */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>


      <Box>
        <CustomDivider />
        <nav aria-label="vacancies workshop diary">
          <List>
            {['Инфо профиля', 'Выход'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 &&
                      <SvgIcon>

                      </SvgIcon>
                    }
                    {index === 1 &&
                      <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65377 0C1.34777 0 1.0543 0.12967 0.83793 0.360484C0.621557 0.591298 0.5 0.904349 0.5 1.23077V14.7692C0.5 15.0957 0.621557 15.4087 0.83793 15.6395C1.0543 15.8703 1.34777 16 1.65377 16H10.307C10.46 16 10.6068 15.9352 10.7149 15.8198C10.8231 15.7044 10.8839 15.5478 10.8839 15.3846C10.8839 15.2214 10.8231 15.0649 10.7149 14.9495C10.6068 14.8341 10.46 14.7692 10.307 14.7692H1.65377V1.23077H10.307C10.46 1.23077 10.6068 1.16593 10.7149 1.05053C10.8231 0.93512 10.8839 0.778595 10.8839 0.615385C10.8839 0.452174 10.8231 0.295649 10.7149 0.180242C10.6068 0.064835 10.46 0 10.307 0H1.65377ZM12.7345 4.79508C12.6262 4.67952 12.4793 4.61461 12.3261 4.61461C12.1729 4.61461 12.026 4.67952 11.9177 4.79508C11.8094 4.91063 11.7485 5.06735 11.7485 5.23077C11.7485 5.39419 11.8094 5.55091 11.9177 5.66646L13.5295 7.38462H5.69195C5.53895 7.38462 5.39222 7.44945 5.28403 7.56486C5.17585 7.68026 5.11507 7.83679 5.11507 8C5.11507 8.16321 5.17585 8.31974 5.28403 8.43514C5.39222 8.55055 5.53895 8.61539 5.69195 8.61539H13.5295L11.9177 10.3335C11.8094 10.4491 11.7485 10.6058 11.7485 10.7692C11.7485 10.9326 11.8094 11.0894 11.9177 11.2049C12.026 11.3205 12.1729 11.3854 12.3261 11.3854C12.4793 11.3854 12.6262 11.3205 12.7345 11.2049L15.3305 8.43569C15.3842 8.37853 15.4269 8.31062 15.4559 8.23586C15.485 8.16109 15.5 8.08095 15.5 8C15.5 7.91906 15.485 7.83891 15.4559 7.76414C15.4269 7.68938 15.3842 7.62147 15.3305 7.56431L12.7345 4.79508Z" fill="#B5B5B7" />
                        </svg>
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