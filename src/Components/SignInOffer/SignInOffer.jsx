
import classes from './SignInOffer.module.scss';

const SignInOffer = () => {
    return <div className={classes.signInOffer}>
        <div className={classes['form-text']}>Please, <a href='/login'> SIGN IN</a> to start using the app
        </div>
    </div>
}

export default SignInOffer