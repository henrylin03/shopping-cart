import { Link, NavLink } from "react-router-dom";
import PageLink from "./PageLink";
import { ShoppingBag } from "lucide-react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Go to homepage">
        <h1 className={styles.branding}>OneStop</h1>
      </Link>

      <nav className={styles.pageLinks}>
        <PageLink text="Home" />
        <PageLink path="/shop" text="Shop" />
      </nav>

      <NavLink
        to="/bag"
        className={({ isActive }) =>
          isActive ? styles.activeBagLink : styles.bagLink
        }
      >
        <button className={styles.bagButton} aria-label="View shopping bag">
          <ShoppingBag />
          <span className={styles.itemCounter}>0</span>
        </button>
      </NavLink>
    </header>
  );
};

export default Header;
