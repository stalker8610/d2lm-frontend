import classes from './Footer.module.css'

const Footer = () => {
    return <div className={classes.appFooter}>
        <div className={classes['form-text']}>&copy; 2022 Powered by
            <a href='https://github.com/stalker8610' target='_blank'> ASVCOM</a>
        </div>
    </div>
}

export default Footer;