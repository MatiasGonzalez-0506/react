import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    return(
        <>
        <footer>{props.footer}</footer>
        <Button variant="success">{props.button}</Button>
        </>
    )
}

export default Footer;