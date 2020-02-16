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
    <h1 cla>O seu Arquitecto</h1>
    </div>
    <div class ="row">
      <div class="contact">
        <figure class ="contact_shape">
          <img class="contact_img" src={img} alt="Nelson tito"/>
          <figcaption class="contact_caption center white-text lighten-3">Nelson Tito</figcaption>
        </figure>

        <div class ="contact_text">
            <p>
             Formado em Arquitecura na Universidade Agostinho net, realizou varios projecto para
              differentes categorias nomiada mente de casa, estapocos de lazer e outros
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
