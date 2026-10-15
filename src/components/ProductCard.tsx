import type { Product } from "../types/Product";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails((showDetails) => !showDetails);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.imageUrl}
        title={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        {showDetails && (
          <>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.category}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.inStock}
            </Typography>
          </>
        )}

        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button onClick={handleClick}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
