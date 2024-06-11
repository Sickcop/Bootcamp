import '../hojas-de-estilos/BotonClear.css'

const BotonClear = (props) => (
    <div className='boton-clear'
    onClick={() => {props.manejarClear(props.input)}}>
        {props.children}
    </div>
)

export default BotonClear