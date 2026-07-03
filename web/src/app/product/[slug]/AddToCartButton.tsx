"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Check } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button
      variant={added ? "success" : "primary"}
      size="lg"
      onClick={handleAdd}
      disabled={!product.inStock}
      className="w-full sm:w-auto"
    >
      {added ? (
        <>
          <Check className="w-5 h-5 mr-2" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag className="w-5 h-5 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </>
      )}
    </Button>
  );
}
