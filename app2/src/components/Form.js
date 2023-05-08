import { useState } from 'react';

export default function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('usuario ' + name + ' foi adicionado com a senha ' + senha);
    }

    const [name, setName] = useState();
    const [senha, setSenha] = useState();

    return (
        <>
            <h1>Meu cadastro com hooks</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        placeholder="Digite seu nome"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password" 
                        placeholder="Digite sua senha"
                        id="senha"
                        name="senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>

    );
}