import "./Navigation.css";
import dayjs from "dayjs";
const formatted = dayjs().format("MMMM D");

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul>
          <li>Lorem</li>
        </ul>
        <ul>
          <li>{formatted}</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
