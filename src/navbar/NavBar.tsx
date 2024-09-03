import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/auth.selectors';
import { Child, LoginChildType } from '../conect/type';
// import { Password } from '@mui/icons-material';
import { setUser } from '../redux/auth/auth.slice';
import { PATHS } from './paths';
import { useAppSelector } from '../redux/store';
import { removeSession } from '../auth/utils';


function ResponsiveAppBar() {
  const pages = [{ label: 'התחברות', path: PATHS.login }, { label: 'בואו לשתף', path: PATHS.share }, { label: 'פעילויות', path: PATHS.workshop }, { label: 'אודות', path: PATHS.about }, { label: 'דף הבית', path: PATHS.home }];

  const handlePrivateAreaSelect = () => {
    if (!isAuthenticated) {
      navigate(PATHS.privateArea)
    }
    else
      navigate(PATHS.about)
  }
  const handleLogInSelect = () => {
    navigate(PATHS.login)
  }
  const handleLogOutSelector = () => {
    removeSession()
    window.location.href=PATHS.home
  }
  const settings = [{
    label: 'אזור אישי', action: handlePrivateAreaSelect
  },
  {
    label: 'התחברות', action: handleLogInSelect
  },
  {
    label: 'התנתקות', action: handleLogOutSelector
  }];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const { isAuthenticated } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectAuth)
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = async (path: string) => {
    navigate(path)
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            // component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Stars On The Way
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                {isAuthenticated && user?.name}
                {!isAuthenticated && <Avatar alt="Remy Sharp" />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={() => {
                  setting.action();
                  handleCloseNavMenu()
                }}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
