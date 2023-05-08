export default function StateLift({ setNome }) {
    return (
        <>
            {/*
                Varios componentes com o mesmo estado
                Definimos quem usa e quem define (setState)
            */}

            <p>Digite seu nome: </p>
            <input type="text" place onChange={(e) => setNome(e.target.value)}/> 
        </>
    )
}