
import { Form } from 'react-bootstrap'
import classes from './SignInOffer.module.css';

const SignInOffer = () => {
    return <div className={classes.center}>
        <Form.Text> Please, <a href='/login'>SING IN</a> to start using the app
        </Form.Text>
    </div>
}

export default SignInOffer