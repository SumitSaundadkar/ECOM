import { useCart } from "../../src/context/cartContext";
const NavBar = () => {
  const { cartState } = useCart();
  return (
    <header>
      <div className="logo">
        <h2>E-KHARIDO</h2>
      </div>
      <nav className="nav-links">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>LOGIN</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="circle">
              <span className="cart_num">{cartState.length}</span>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { NavBar };
