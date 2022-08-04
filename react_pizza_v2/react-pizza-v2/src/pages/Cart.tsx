import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import cart from '../assets/img/cart.svg';
import trash from '../assets/img/trash.svg';
import arrow from '../assets/img/grey-arrow-left.svg';

import { CartItemBlock, CartEmpty } from '../components';

import { clearItems } from '../redux/cart/slice';
import { selectCart } from '../redux/cart/selectors';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm(`Are you sure you want to clear?`)) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={cart} alt="Cart logo" />
            &nbsp; Корзина
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <img src={trash} alt="Trash logo" />
            <span>Очистить корзину</span>
          </div>
        </div>
        {items.map((item: any) => (
          <CartItemBlock key={item.id} {...item} />
        ))}
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <img src={arrow} alt="Grey-arrow-left" />
              &nbsp;
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
