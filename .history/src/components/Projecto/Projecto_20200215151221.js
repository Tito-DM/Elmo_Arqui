import React, { Component, Fragment } from "react";
import NavBar from "../NavBar/NavBar";

class Projecto extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<NavBar />
				<h1 class="center descr-text">Danos a Descricao do seu Projecto</h1>

<div class="container ">
     <div class="row">
    <form class="col s12" id="form_projecto"><
      <div class="row">
        <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
          <input id="Primeiro_Name" type="text" class="validate">
          <label for="Primeiro_Name">Primeiro Name</label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
          <input id="Sobrenome" type="text" class="validate">
          <label for="Sobrenome">Sobrenome</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
           <i class="material-icons prefix">phone</i>
          <input id="Telefone" type="tel" class="validate">
          <label for="last_name">Telefone</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
           <i class="material-icons prefix">email</i>
          <input id="Email" type="email" class="validate">
          <label for="password">Email</label>
        </div>
      </div>
     

      <div class="row">
        <div class="input-field col s12">
           <i class="material-icons prefix">content_paste</i>
          <select id="projectos">
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Casa</option>
            <option value="2">Farmacias</option>
            <option value="3">Escola</option>
            <option value="4">Restaurantes</option>
            <option value="5">Hospital</option>
            <option value="6">Condominio</option>
            <option value="7">Hotel</option>
            <option value="8">Outros</option>
          </select>
         <label>Categoria</label>
        </div>
      </div>


  <div class="row">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="detalhe" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">Descrevenos o seu Projecto</label>
        </div>
      </div>
        <button class="btn waves-effect waves-light cyan darken-3" type="submit" name="action">Enviar
            <i class="material-icons right">send</i>
        </button>
  </div>
</div>
    </form>
  </div>

</div>

			</Fragment>
		);
	}
}

export default Projecto;
