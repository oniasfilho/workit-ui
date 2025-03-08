import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  const handleNavigate = (url: string = "/") => {
    navigate(url);
  };

  return (
    <header className="header-section">
      <div className="logo" onClick={() => handleNavigate()}></div>
      <div className="green-underline apply-button" onClick={() => handleNavigate("/apply")}>
        Apply for access
      </div>
    </header>
  );
};

export default Header;
