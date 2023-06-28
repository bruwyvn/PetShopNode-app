import { useState } from "react";

const Costumer = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvv, setCvv] = useState("");
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
      imagemPerfil: {
        data: {
          type: "Buffer",
          data: [],
        },
        contentType: "image/png",
      },
      nomeCartao,
      numeroCartao,
      cvv,
      email,
      senha,
    };

    const formData = new FormData();
    formData.append("imagemPerfil", fotoPerfil)
    formData.append("teste", JSON.stringify(data))
      

    try {
      const response = await fetch("http://localhost:3000/cliente", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Incluir o token no cabeçalho da requisição
        },
        body: formData,
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:grid-rows-2"
        >
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold">Dados Pessoais</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="text"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Telefone:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="text"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Endereço:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="text"
                  value={endereco}
                  onChange={(event) => setEndereco(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">CPF:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="text"
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Escolher foto de perfil:</span>
                </label>
                <input
                  className="file-input input-bordered w-full max-w-xs"
                  type="file"
                  onChange={(event) => setFotoPerfil(event.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold">Dados do Cartão</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome no Cartão:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="text"
                  value={nomeCartao}
                  onChange={(event) => setNomeCartao(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Número do Cartão:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="text"
                  value={numeroCartao}
                  onChange={(event) => setNumeroCartao(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">CVC:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="password"
                  value={cvv}
                  onChange={(event) => setCvv(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Senha:</span>
                </label>
                <input
                  className="input-bordered input w-full max-w-xs"
                  type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn-primary btn">
                  Cadastrar/Atualizar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Costumer;
