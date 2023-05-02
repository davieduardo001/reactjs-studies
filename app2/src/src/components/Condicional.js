import { useState } from 'react'

export default function Condicional({ }) {
    
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    
    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(e) {
        e.preventDefault();
        setUserEmail(false);
    }
    
    return (
        <>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder='digite seu email...' onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail} type="submit">Enviar email</button>
            </form>

            {userEmail && (
                <div>
                    O email do usuario eh {userEmail}
                    <button onClick={limparEmail}>limpar email</button>
                </div>
            )}
        </>

    );
}