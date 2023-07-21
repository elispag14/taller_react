import { useContext } from "react";
import SignContext from "../context/SignContext";

const SignUp = () => {
  const {setStep} = useContext(SignContext);
  return (
  <main>
    <h3>ESTA ES TU OFICINA VIRTUAL!</h3>
    <div className= "card">
    <form autoComplete="off">
        <fieldset>
            <label htmlFor="documento">Tipo documento*</label>
            <select id="documento"><option value="Favor Seleccione su tipo de documento"></option>
            <option value= "">Seleccione su tipo de documento</option>
            <option value= "Cédula de Ciudadanía">Cédula de Ciudadanía</option>
            <option value= "Tarjeta de Identidad">Tarjeta de Identidad</option>
            <option value= "Cédula de Extranjería">Cédula de Extranjería</option>
            <option value= "Registro Civil">Registro Civil</option>
            <option value= "Carnét Diplomatico">Carnét Diplomatico</option>
            <option value= "Pasaporte">Pasaporte</option>
            <option value= "Permiso especial de Permanencia">Permiso especial de Permanencia</option>
            <option value= "Salvoconducto de Permanencia">Salvoconducto de Permanencia</option>
            <option value= "Nit">Nit</option>
            <option value= "Registro Nacido Vivo">Registro Nacido Vivo</option>
            <option value= "Pasaporte de la Onu">Pasaporte de la Onu</option>
            </select>
            <p className="error">requerido</p>
        </fieldset>
        <fieldset>
        <label htmlFor="Número de documento">Número de documento*</label>
        <input type="number" id="Número de documento" />
        <p className="error">requerido</p>
        </fieldset>
        
      <fieldset>
        <label htmlFor="fullname">Nombres Completos</label>
        <input type="text" id="fullname" autoFocus/>
        <p className="error">requerido</p>
      </fieldset>
      <fieldset>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" autoFocus/>
          <p className ="error">Se requiere un correo valido</p>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id= "password" />
          <p className="error">Se requiere contraseña</p>
        </fieldset>
        <fieldset>
          <label htmlFor="confirmar">Confirmar contraseña</label>
          <input type="password" id= "confirmar" />
          <p className="error">requerido</p>
        </fieldset>
   
        <fieldset>
            <label htmlFor="terms">
                <input type="checkbox" id="terms" /> Acepto terminos y condiciones
            </label>
            <p className="error">requerido</p>
        </fieldset>
        <button type="submit">Registrarme</button>        
        </form> 
    </div>
    <p>
        ¿No tienes cuenta?{" "} 
         <span
            onClick={() => {
            setStep("signin");
          }}
        >   
            Registrarme ahora!
         </span>
        </p> 
  </main>
  );
};

export default SignUp;