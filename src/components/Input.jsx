import Form from 'react-bootstrap/Form';

const Input = (props) => {
    return (
        <Form>
            <h3>Nombre:</h3>
            <input 
            type="text" 
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}/>
            <h3>Contraseña:</h3>
            <input 
            type="text" 
            onChange={(e) => props.setPassword(e.target.value)}
            value={props.password} />
        </Form>
    )
}

export default Input;
