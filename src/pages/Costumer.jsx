import { useState } from "react";

const Costumer = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      return;
    }

    // Chamada para o endpoint em Node.js para atualização dos dados
    // Exemplo fictício:
    const data = {
      nome,
      telefone,
      endereco,
      cpf,
      fotoPerfil,
      nomeCartao,
      numeroCartao,
      cvc,
      email,
      senha,
    };

    try {
      const response = await fetch("http://localhost:3000/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluir o token no cabeçalho da requisição
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Atualização bem-sucedida, fazer algo aqui se necessário
        console.log("Dados atualizados com sucesso!");
      } else {
        // Lidar com erros de atualização
        console.error("Erro ao atualizar os dados.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <h2>Dados Pessoais</h2>
          <label>
            Nome:
            <input
              className="input-field"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </label>
          <label>
            Telefone:
            <input
              className="input-field"
              type="text"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </label>
          <label>
            Endereço:
            <input
              className="input-field"
              type="text"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
            />
          </label>
          <label>
            CPF:
            <input
              className="input-field"
              type="text"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
          </label>
          <label>
            Escolher foto de perfil:
            <input
              className="input-field"
              type="file"
              onChange={(event) => setFotoPerfil(event.target.files[0])}
            />
          </label>
        </div>
        <div className="col-md-6">
          <h2>Dados do Cartão</h2>
          <label>
            Nome no Cartão:
            <input
              className="input-field"
              type="text"
              value={nomeCartao}
              onChange={(event) => setNomeCartao(event.target.value)}
            />
          </label>
          <label>
            Número do Cartão:
            <input
              className="input-field"
              type="text"
              value={numeroCartao}
              onChange={(event) => setNumeroCartao(event.target.value)}
            />
          </label>
          <label>
            CVC:
            <input
              className="input-field"
              type="password"
              value={cvc}
              onChange={(event) => setCvc(event.target.value)}
            />
          </label>
        </div>
      </div>

      <div>
        <label>
          Email:
          <input
            className="input-field"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            className="input-field"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </label>
      </div>

      <button type="submit">Cadastrar/Atualizar</button>
    </form>
  );
};

export default Costumer;
