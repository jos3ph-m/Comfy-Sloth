import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? <div className="empty">your cart is empty</div> <Link to="/products" classname='btn'>fill it</Link>: <StripeCheckout />}

      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
export default CheckoutPage;
