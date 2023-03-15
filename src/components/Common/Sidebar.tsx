import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Collapse, ListItemButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import Sprites from '../../../src/assets/images/sprites.svg';
/* import { MENU_SETTING_SIDEBAR, MENU_SIDEBAR, MENU_SYSTEM_SIDEBAR } from 'constants/menu'; */
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme?: any) => ({
    logo: {
        width: '32px',
        height: '32px',
        background: `transparent url(${Sprites}) no-repeat 0 -136px`,
        marginLeft: '16px'
    },
    link: {
        '&.active > div': {
            backgroundColor: theme.palette.action.selected,
            color: theme.palette.primary.main,
            borderRight: '3px solid',
            '& svg': {
                color: theme.palette.primary.main
            },
            '& > div > span': {
                fontWeight: 'bold'
            }
        }
    }
}));

export function Sidebar() {
    const classes = useStyles();
    const [openSetting, setOpenSetting] = React.useState<boolean>(false);
    const [openSystem, setOpenSystem] = React.useState<boolean>(false);

    const handleMenuSettingClick = () => {
        setOpenSetting(!openSetting);
    };

    const handleMenuSystemClick = () => {
        setOpenSystem(!openSystem);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List sx={{ p: 0 }}>
                    <Link to="/admin/trang-chu">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box className={classes.logo}></Box>
                            <Typography variant="h2" fontWeight={900} sx={{ minHeight: '64px', lineHeight: '64px', px: 2 }}>
                                Tài sản
                            </Typography>
                        </Box>
                    </Link>
                    <Box>
                       {/*  {MENU_SIDEBAR.map((menu, index) => ( */}
                            {/* <Box key={index}>
                                <NavLink to={menu.url} className={classes.link}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <menu.icon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={menu.name} />
                                    </ListItem>
                                </NavLink>
                            </Box> */}
                      {/*   ))} */}
                        <Box>
                            <ListItem button onClick={handleMenuSettingClick}>
                                <ListItemIcon>
                                    <WidgetsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Tài khoản" />
                                {openSetting ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ListItem>
                            <Collapse in={openSetting} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {/*   {MENU_SETTING_SIDEBAR.map((menu, index) => ( */}
                                        {/* <NavLink key={index} to={menu.url} className={classes.link}>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <TripOriginIcon sx={{ fontSize: 12 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={menu.name} />
                                            </ListItemButton>
                                        </NavLink> */}
                                 {/*    ))} */}
                                </List>
                            </Collapse>
                        </Box>
                        <Box>
                            <ListItem button onClick={handleMenuSystemClick}>
                                <ListItemIcon>
                                    <SettingsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Hệ thống" />
                                {openSystem ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ListItem>
                            <Collapse in={openSystem} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                {/*     {MENU_SYSTEM_SIDEBAR.map((menu, index) => ( */}
                                        {/* <NavLink key={index} to={menu.url} className={classes.link}>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <TripOriginIcon sx={{ fontSize: 12 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={menu.name} />
                                            </ListItemButton>
                                        </NavLink> */}
                                {/*     ))} */}
                                </List>
                            </Collapse>
                        </Box>
                    </Box>
                </List>
            </nav>
        </Box>
    );
}
