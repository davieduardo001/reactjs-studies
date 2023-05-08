export default function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return ('Ola ' + algumNome + ' tudo bem?')
    }

    return <>
        { nome && <h1>{gerarSaudacao(nome)}</h1> }
    </>
}