import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [bio, setBio] = useState();
  const [cargo, setCargo] = useState("dev");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, passwordConfirm, bio, cargo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome."
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu email."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha."
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <span>Confirmar senha:</span>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Digite sua senha novamente."
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </label>

        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Biografia do usuário."
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>

        <label>
          <span>Cargo: </span>
          <select
            name="cargo"
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
          >
            <option value="dev">developer</option>
            <option value="ux">ux</option>
            <option value="po">po</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
