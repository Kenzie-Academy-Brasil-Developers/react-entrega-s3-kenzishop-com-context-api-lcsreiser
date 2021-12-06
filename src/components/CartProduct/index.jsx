import { Description } from "./style";

import { useContext } from "react";
import { CartContext } from "../../providers/Cart/index";
import {
  Button,
  Card,
  ContainerButton,
  ContainerDescription,
  Img,
  ProductImg,
} from "../ProductStyles/style";

const CartProduct = ({ product, actualIndex }) => {
  const { removeFromCart } = useContext(CartContext);

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
        <Button onClick={() => removeFromCart(actualIndex)}>Remover</Button>
      </ContainerButton>
    </Card>
  );
};

export default CartProduct;
