import {Form} from 'react-bootstrap'
import classes from './Footer.module.css'

const Footer = ()=> {
    return <div className={classes.appFooter}>
        <Form.Text> &copy; 2022 Powered by ASVCOM  </Form.Text>
    </div>
}

export default Footer;