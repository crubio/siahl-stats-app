import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

export default function AppHeader(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{bgcolor: '#006D75'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">SIAHL stats</Link>
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
          <Link to="/about"><InfoIcon sx={{color: "#ffaa59"}} /></Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}