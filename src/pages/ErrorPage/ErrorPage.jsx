import { useNavigate } from "react-router-dom";

import MainNavigation from "../../components/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button/Button";

import { UilExclamationOctagon } from "@iconscout/react-unicons";

import "./ErrorPage.styles.scss";

function ErrorPage() {
  const navigate = useNavigate();

  function handleNavigateHome() {
    navigate("/");
  }

  return (
    <>
      <MainNavigation />
      <div className="error">
        <UilExclamationOctagon className="error__logo" />
        <div className="error__content">
          <h3 className="error__status">Error 404</h3>
          <h4 className="error__message">Page not found</h4>
        </div>

        <Button onClick={handleNavigateHome} className="error__btn">
          Visit Homepage
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
