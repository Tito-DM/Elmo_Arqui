import React, { Fragment } from "react";
import "./About.scss";
import img from '../../asset/img/About/pic.jpg'
import NavBar from "../NavBar/NavBar";
const AboutUs = () => {
	return (
		<Fragment>
			<NavBar />
            <section class ="section-contact">
    <div class="container">
    <h1>Elmo Projectos</h1>

    <p>Oferecemos servico de </p>
    </div>
    <div class ="row">
      <div class="contact">
        <figure class ="contact_shape">
          <img class="contact_img" src={img} alt="Nelson tito"/>
          <figcaption class="contact_caption center white-text lighten-3">Nelson Tito</figcaption>
        </figure>

        <div class ="contact_text">
            <p>
             Formado em Arquitecura na Universidade Agostinho net, realizou var
            </p>
        </div>
        <hr/>
        <div>
        </div>
      </div>
    </div>
  </section>
		</Fragment>
	);
};

export default AboutUs;
