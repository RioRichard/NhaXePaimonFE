import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { authActions } from '../Feature/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectIsUser } from '../Feature/auth/authSlice';

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentUser: any = useAppSelector(selectIsUser);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <AppBar position="static" style={{ backgroundColor: "orange" }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <DirectionsBusIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAIMON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to="operatingpolicy" style={{ textDecoration: 'none' }} >
                <Typography sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>
                  Điều khoản hoạt động
                </Typography>
              </Link>
              <Link to="/termofuse" style={{ textDecoration: 'none' }} >
                <Typography sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>
                  Chính sách hoạt động
                </Typography>
              </Link>
              <Link to="/privacypolicy" style={{ textDecoration: 'none' }} >
                <Typography sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>
                  Chính sách bảo mật
                </Typography>
              </Link>
            </Menu>
          </Box>

          <DirectionsBusIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            PAIMON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="operatingpolicy" style={{ textDecoration: 'none' }} >
              <Typography sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>
                Điều khoản hoạt động
              </Typography>
            </Link>
            <Link to="/termofuse" style={{ textDecoration: 'none' }} >
              <Typography sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>
                Chính sách hoạt động
              </Typography>
            </Link>
            <Link to="/privacypolicy" style={{ textDecoration: 'none' }} >
              <Typography sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>
                Chính sách bảo mật
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Link to="ownUserManagement" style={{ textDecoration: 'none' }} >
              <Typography variant="h2" sx={{ my: 2, color: 'white', display: 'block' }} style={{ marginRight: "20px" }}>{currentUser && currentUser?.username}</Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://genk.mediacdn.vn/k:thumb_w/640/2015/1-pokemonday-pikachu-image-1-1448459464523/5-dieu-thu-vi-moi-tiet-lo-ve-pokemon-pikachu.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/tai-khoan" style={{ textDecoration: 'none' }} >
                  <Typography textAlign="center">Account</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

