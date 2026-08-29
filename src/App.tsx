import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import landingPageBg from "./images/landing-page-bg.png";

const navigationItems = [
  {
    label: "Products",
    href: "#featured-products",
  },
  {
    label: "About",
    href: "#about",
  },
];

function App() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="a"
              href="#"
              variant="h6"
              sx={{
                color: "inherit",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              VoltNest Electronics
            </Typography>
            {/* Hamburger Menu */}
            <Box
              component="nav"
              aria-label="Primary navigation"
              sx={{
                display: { xs: "flex", md: "none" },
                gap: 1,
              }}
            >
              <IconButton
                size="large"
                aria-label="hamburger menu"
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
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                disableScrollLock
                sx={{ display: { xs: "block", md: "none" } }}
                slotProps={{
                  paper: {
                    sx: {
                      backgroundColor: "primary.main",
                      color: "common.white",
                    },
                  },
                }}
              >
                {navigationItems.map((item) => (
                  <MenuItem
                    key={item.href}
                    onClick={handleCloseNavMenu}
                    component="a"
                    href={item.href}
                    color="inherit"
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Regular Menu */}
            <Box
              component="nav"
              aria-label="Primary navigation"
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
              }}
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  component="a"
                  href={item.href}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box
          component="section"
          sx={{
            backgroundColor: "background.paper",
            backgroundImage: `url(${landingPageBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            py: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Container maxWidth="lg">
            <Stack
              spacing={3}
              sx={{
                maxWidth: 720,
              }}
            >
              <Typography component="p" variant="overline" color="primary.main">
                Technology for everyday life
              </Typography>

              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    md: "4rem",
                  },
                }}
              >
                Find electronics that fit the way you live.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  fontSize: "1.125rem",
                }}
              >
                Explore dependable computers, mobile devices, accessories, and
                home technology in one straightforward shopping experience.
              </Typography>

              <Box>
                <Button
                  component="a"
                  href="#featured-products"
                  variant="contained"
                  size="large"
                >
                  Browse products
                </Button>
              </Box>
            </Stack>
          </Container>
        </Box>

        <Box
          id="featured-products"
          component="section"
          sx={{
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={2}>
              <Typography component="h2" variant="h4">
                Featured products
              </Typography>

              <Typography color="text.secondary">Coming Soon!</Typography>
            </Stack>
          </Container>
        </Box>

        <Box
          id="about"
          component="section"
          sx={{
            backgroundColor: "background.paper",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={2} sx={{ maxWidth: 720 }}>
              <Typography component="h2" variant="h4">
                About VoltNest
              </Typography>

              <Typography color="text.secondary">
                VoltNest Electronics is designed to make discovering and
                comparing everyday electronics a breeze.
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box
        component="footer"
        sx={{
          backgroundColor: "grey.900",
          color: "common.white",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} VoltNest Electronics
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
