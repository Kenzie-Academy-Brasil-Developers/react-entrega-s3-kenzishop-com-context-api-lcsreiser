import {
  Card,
  ProductImg,
  Img,
  Button,
  ContainerButton,
  Description,
  ContainerDescription,
} from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/index";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <ProductImg>
        <Img src={product.img} alt={product.name} />
      </ProductImg>
      <ContainerDescription>
        <Description>{product.name}</Description>
        <Description> - </Description>
        <Description>R$ {product.price.toFixed(2)}</Description>
      </ContainerDescription>
      <ContainerButton>
        <Button onClick={() => addToCart(product)}>Comprar</Button>
      </ContainerButton>
    </Card>
  );
};

export default Product;
