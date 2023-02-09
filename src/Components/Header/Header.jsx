import AccountView from './AccountView/AccountView'
import classes from './Header.module.scss'

const Header = (props) => {

    return (
        <div className={classes.header}>
            <div>
                <div className={classes.ghost}>
                    <a rel="noreferrer noopener" href="https://www.bungie.net" target="_blank"/> 
                </div>
                <div className={classes.title}> Destiny 2: Loot Manager </div>
            </div>
            {!props.loading && !props.user && <a href="/login" className={classes.signInLink}>SIGN IN</a>}
            {!props.loading && props.user && <AccountView profileImgPath={props.user.imgPath} profileName={props.user.name} />}            
        </div>
    )
}

export default Header;
