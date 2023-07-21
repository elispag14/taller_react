import { useContext, useState } from "react";
import SignContext from "../context/SignContext";

//import Icon from './asset/img/Icon.PNG';//

const SignIn = () => {
  const { setStep } = useContext(SignContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("enviando informacion...");
    if (email && password) {
      alert(`${email} - ${password}`);
    }
  };

  return (
    <main>
      <h3>Bienvenido a Eps Sanitas!</h3>
      
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailFocused(true)}
              data-focused={emailFocused}
            />
            <p className="error">El correo solo puede contener letras,números,puntos,guiones.</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordFocused(true)}
              data-focused={passwordFocused}
            />
            <p className="error">Password</p>
          </fieldset>
          <button type="submit">Iniciar Sesión</button>
          <div
            className="forgot"
            onClick={() => {
              setStep("forgot");
            }}
          >
            ¿Olvidaste tu contraseña?
          </div>
        </form>
      </div>
      <p>
       ¿No tienes cuenta?{" "}
        <span
          onClick={() => {
            setStep("signup");
          }}
        >
          Registrate Ahora!
        </span>
      </p>
    </main>
  );
};

export default SignIn;