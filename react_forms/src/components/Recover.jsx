import { useContext } from "react";
import SignContext from "../context/SignContext";

const recover = () => {
  const {setStep} = useContext(SignContext);
  return (
    <main>
     <h3>¿Ya estamos aqui Paola?</h3>
     <div className= "card">
      <form autoComplete="off">
      <fieldset>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" autoFocus/>
          <p className ="error">Se requiere un correo valido</p>
        </fieldset>
        <button type="submit">Recordar contraseña!</button>
        </form>
    </div> 
    <p>¿Ya tienes una cuenta?{"  "}
        <span   
             onClick={() => {
               setStep("signup");
          }}
        >
          Iniciar Sesión!
        </span>
      </p>
    </main>
  );
};
export default recover