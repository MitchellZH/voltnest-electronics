import type { Product } from "../types/Product";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.imageUrl}
        title={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
