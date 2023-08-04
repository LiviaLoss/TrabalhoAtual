
function Card(props) {

    // no caminho da padariao props vai trazer o reproduz dos videos para ca onde estavmos otimizando
    
        return (
    
            <div class="box-pagina-principal media1" onClick={props.reproduz}>
                <img src={props.imgagem} alt=""></img>
                <h4>{props.titulo}</h4>
            </div>
    
        )
    
    }
    
    export default Card