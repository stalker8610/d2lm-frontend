
import classes from './SignInOffer.module.css';

const SignInOffer = () => {
    return <div className={classes.signInOffer}>
        <div className={classes['form-text']}>Please, <a href='/login'> SING IN</a> to start using the app
        </div>
    </div>
}

export default SignInOffer