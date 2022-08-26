import { Button } from 'react-bootstrap';

const Boton = (props) => {
    return (
        <Button 
        className="boton" 
        variant="primary" 
         onClick={props.message}
        >Submit</Button>
    )
}

export default Boton;
