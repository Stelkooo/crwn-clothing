import { CartItemContainer, ItemContainer, Name } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemContainer>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemContainer>
    </CartItemContainer>
  );
};

export default CartItem;
