import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import landingPageBg from "./images/landing-page-bg.png";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";

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
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(normalizedSearchTerm) ||
      product.name.toLowerCase().includes(normalizedSearchTerm),
  );

  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchTerm(event.target.value);
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
      <NavBar navigationItems={navigationItems} />

      <Toolbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box
          component="section"
          id="hero"
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
              {normalizedSearchTerm ? (
                <Typography component="h2" variant="h3">
                  Product Results
                </Typography>
              ) : (
                <Typography component="h2" variant="h3">
                  Featured Products
                </Typography>
              )}
              <TextField
                label="Search products"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
              />
              {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
              ) : (
                <Typography color="text.secondary">
                  No products match your search.
                </Typography>
              )}
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
