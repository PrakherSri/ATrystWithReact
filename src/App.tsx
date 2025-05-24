import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CssBaseline,
  createTheme,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';

import Home from './pages/Home';
import About from './pages/About';
import HelpPage from './pages/Help';
import AIChat from './pages/AIChat';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'AI Chat', path: '/AIChat' },
    { title: 'Help', path: '/help' },
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar navLinks={navLinks} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/AIChat" element={<AIChat />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

interface NavbarProps {
  navLinks: { title: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyWebsite
        </Typography>

        {navLinks.map((link) => (
          <Button
          key={link.title}
          color="inherit"
          component={NavLink}
          to={link.path}
          sx={{
            fontWeight: 'normal',
            color: 'inherit',
            textDecoration: 'none',
            '&.active': {
              fontWeight: 'bold',
            },
          }}
        >
          {link.title}
        </Button>
        ))}

        {/* Light/Dark Mode Toggle */}
        <IconButton sx={{ ml: 2 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default App;
