import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/teste");
  };

  return <button onClick={handleNavigate}>workit</button>;
};

export default Header;
