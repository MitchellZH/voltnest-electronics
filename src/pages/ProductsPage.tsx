import NavBar from "../components/NavBar";
import {
  Box,
  Toolbar,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductList from "../components/ProductList";

const navigationItems = [
  {
    label: "Products",
    to: "/products",
  },
];

const ProductsPage = () => {
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
          py: { xs: 4, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: "primary.dark",
              color: "primary.contrastText",
              borderRadius: 4,
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 8 },
              mb: { xs: 6, md: 8 },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                letterSpacing: 2,
                opacity: 0.85,
              }}
            >
              THE VOLTNEST COLLECTION
            </Typography>

            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2.25rem",
                  sm: "3rem",
                  md: "3.75rem",
                },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                maxWidth: 650,
                mt: 1,
              }}
            >
              Find your next tech upgrade.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 520,
                mt: 2,
                lineHeight: 1.8,
                opacity: 0.9,
              }}
            >
              Explore electronics for your workspace, entertainment, and
              everyday life.
            </Typography>
          </Box>

          <Box
            component="section"
            aria-labelledby="categories-heading"
            sx={{ mb: { xs: 6, md: 8 } }}
          >
            <Typography
              id="categories-heading"
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Shop by Category
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Find the right technology for your setup.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
                gap: 3,
              }}
            >
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Card
                    key={category.name}
                    variant="outlined"
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        "&:last-child": { pb: 3 },
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: "action.hover",
                          borderRadius: 3,
                          display: "grid",
                          placeItems: "center",
                          mb: 3,
                          mx: "auto",
                        }}
                      >
                        <Icon
                          sx={{
                            fontSize: 36,
                            color: "primary.main",
                          }}
                        />
                      </Box>

                      <Typography
                        component="h3"
                        variant="h6"
                        sx={{ fontWeight: 700 }}
                      >
                        {category.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {category.description}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>

          <Box component="section" aria-labelledby="products-heading">
            <Typography
              id="products-heading"
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              All Products
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Discover what's available at VoltNest.
            </Typography>

            <ProductList products={products} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductsPage;
