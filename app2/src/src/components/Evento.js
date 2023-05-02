export default function Evento() {

    const meuEvento = () => {
        console.log('fui clicado');
    }

    return (
        <>
            <p>clique para disparar um evento:</p>
            <button onClick={meuEvento}>click me</button>
        </>
    );
}