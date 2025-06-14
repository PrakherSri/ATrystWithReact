import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, useTheme, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { blue, green, red, purple, yellow, orange } from '@mui/material/colors';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import appSettings from './AppSettings.json';

import Home from './pages/Home';
import About from './pages/About';
import HelpPage from './pages/Help';
import AIChat from './pages/AIChat';

const colorOptions = {
  blue,
  green,
  red,
  purple,
  yellow,
  orange
};

const ColorModeContext = React.createContext<{
  toggleColorMode: () => void;
  setPrimaryColor: (color: keyof typeof colorOptions) => void;
}>({
  toggleColorMode: () => {},
  setPrimaryColor: () => {},
});

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [primaryColor, setPrimaryColor] = React.useState<keyof typeof colorOptions>(
    (appSettings.primaryColor as keyof typeof colorOptions) || 'blue'
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      setPrimaryColor: (color: keyof typeof colorOptions) => setPrimaryColor(color),
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: colorOptions[primaryColor],
        },
      }),
    [mode, primaryColor]
  );

  // Use menus from config and filter enabled ones
  const navLinks = appSettings.menus.filter((menu: any) => menu.enabled);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar navLinks={navLinks} primaryColor={primaryColor} />
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
  primaryColor: keyof typeof colorOptions;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, primaryColor }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {appSettings.siteTitle}
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
