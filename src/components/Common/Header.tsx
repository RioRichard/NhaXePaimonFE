import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme?: any) => ({
    link: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px'
    },

    navLink: {
        color: '#fff',

        '&.active > div': {
            backgroundColor: theme.palette.action.selected
        }
    },

    listItemIcon: {
        minWidth: '32px !important',

        '& > svg': {
            color: '#fff',
            fontSize: '20px'
        }
    }
}));

export function Header() {
/*     const dispatch = useAppDispatch(); */
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
/* 
    const currentUser = useAppSelector(selectIsUser); */

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

/*     const handleLogout = () => {
        dispatch(authActions.logout());
    }; */

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 0, background: '#fff', color: '#111' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ mr: 1 }}>{/* {currentUser && currentUser.username} */}</Typography>
                            <IconButton size="small" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                                <AccountCircle fontSize="small" />
                            </IconButton>
                        </Box>
                        <Menu id="menu-appbar" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>
                                <Link to="" className={classes.link}>
                                    <AccountCircle fontSize="small" sx={{ mr: 2 }} />
                                    Tài khoản
                                </Link>
                            </MenuItem>
                            <MenuItem /* onClick={handleLogout} */>
                                <Box className={classes.link}>
                                    <LogoutIcon fontSize="small" sx={{ mr: 2 }} />
                                    Đăng xuất
                                </Box>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
