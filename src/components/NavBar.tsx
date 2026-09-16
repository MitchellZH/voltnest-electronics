import { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type NavigationItem = {
  label: string;
  href: string;
};

type NavBarProps = {
  navigationItems: NavigationItem[];
};

function NavBar({ navigationItems }: NavBarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: "all 0.3s ease",
        backgroundColor: trigger ? "#01163f8a" : "primary.main",
      }}
    >
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
              aria-label="Open navigation menu"
              aria-controls={anchorElNav ? "menu-appbar" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElNav)}
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
  );
}

export default NavBar;
