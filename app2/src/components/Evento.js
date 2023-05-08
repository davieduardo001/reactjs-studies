import Button from "./Button";

export default function Evento() {

    const meuEvento = () => {
        console.log('fui clicado');
    }

    const meuEvento2 = () => {
        console.log('evento 2 clicado')
    }

    return (
        <>
            <p>clique para disparar um evento:</p>
            <Button text="Primeiro evento" event={meuEvento2}/>
            <button onClick={meuEvento}>click me</button>
        </>
    );
}