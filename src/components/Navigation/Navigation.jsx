import "./Navigation.css";
import dayjs from "dayjs";
const formatted = dayjs().format("MMMM D");

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>About us</li>
          <li>Contact</li>
          <li>Book</li>
        </ul>
        <ul>
          <li>Shop</li>
        </ul>
        <ul>
          <li>{formatted}</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
