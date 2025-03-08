import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  const handleNavigate = (url: string = "/") => {
    navigate(url);
  };

  return (
    <header className="header-section">
      <div className="logo" onClick={() => handleNavigate()}>
        workit
      </div>
      <div
        className="green-underline"
        onClick={() => handleNavigate("/apply")}
      >
        Appy for access
      </div>
    </header>
  );
};

export default Header;
