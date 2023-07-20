import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UilCalendarAlt } from "@iconscout/react-unicons";

import "./MagazineDetail.styles.scss";

function MagazineDetail() {
  return (
    <div className="magazine-detail">
      <div className="magazine-detail__header">
        <div className="magazine-detail__hero">
          <div className="magazine-detail__date">
            <UilCalendarAlt />
            <span>December 2, 2022</span>
          </div>
          <h2 className="magazine-detail__heading">
            Organic farming: best modern practices
          </h2>
        </div>

        <p className="magazine-detail__paragraph">
          Aenean urna urna, semper sed consectetur sit amet, pretium eu ante.
          Nulla et consectetur ligula, ut fringilla velit. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nulla sagittis vel ante sit
          amet tempor. In sit amet neque non tellus interdum tincidunt eget eu
          odio.
        </p>
      </div>
      <div className="magazine-detail__footer">
        <h3> Donec quis diam felis?</h3>

        <p>
          Etiam id quam maximus, tempus justo at posuere est! Aenean urna urna,
          semper sed consectetur sit amet, pretium eu ante. Nulla et consectetur
          ligula, ut fringilla velit. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
        <p>
          Aenean urna urna, semper sed consectetur sit amet, pretium eu ante.
          Nulla et consectetur ligula, ut fringilla velit. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nulla sagittis vel ante sit
          amet tempor. In sit amet neque non tellus interdum tincidunt eget eu
          odio.
        </p>

        <ul>
          <li>1. Etiam id quam maximus, tempus justo at posuere est.</li>
          <li>2. Aenean urna urnasemper sed consectetur sit amet.</li>
          <li>3. Lorem et malesuada fames ac ante dolor.</li>
          <li>4. Pretium eu ante. Nulla et consectetur ligula.</li>
        </ul>

        <p>
          Donec quis diam felis. Etiam id quam maximus, tempus justo at posuere
          est! Aenean urna urna, semper sed consectetur sit amet, pretium eu
          ante. Nulla et consectetur ligula, ut fringilla velit. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>

        <figure>
          <img
            src="	https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/vim0090.jpg"
            alt=""
            width={"100%"}
          />
        </figure>

        <p>
          Aenean urna urna, semper sed consectetur sit amet, pretium eu ante.
          Aenean urna urna, semper sed consectetur sit amet, pretium eu ante.
          Nulla et consectetur ligula, ut fringilla velit. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nulla sagittis vel ante sit
          amet tempor. In sit amet neque non tellus interdum tincidunt! Nulla et
          consectetur ligula, ut fringilla velit. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Nulla sagittis vel ante sit amet
          tempor. In sit amet neque non tellus interdum tincidunt
        </p>

        <p>
          Aenean urna urna, semper sed consectetur sit amet, pretium eu ante.
          Nulla et consectetur ligula, ut fringilla velit. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nulla sagittis vel ante sit
          amet tempor. In sit amet neque non tellus interdum tincidunt eget eu
          odio.
        </p>
      </div>
    </div>
  );
}

export default MagazineDetail;
