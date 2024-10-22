import Button from '../Button/Button';
import './Main.css';

export default function Main(props) {
    return(
        <>
           <main>
                {/* <h2>{props.titulo}</h2>

                <p>{props.texto1}</p> */}

                <Button titulo="Padrão"/>
                <Button titulo="Alerta" class="alerta"/>
                <Button titulo="Erro" class="erro"/>
                <Button titulo="Sucesso" class="sucesso"/>
           </main>
        </>
    );
}

// export default Main; //