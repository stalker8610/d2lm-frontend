import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {

    const LoginItem = () => {
        return <a href="/login" className={classes.login}>SIGN IN</a>
    }

    const ProfileItem = (props) => {

        return (
            <div className={classes.account}>
                <div className={classes["account-view"]}>
                    <img className={classes["account-img"]} src={`https://www.bungie.net${props.profileImgPath}`} width="32px" height="32px" alt="account logo" />
                    <div className={classes["name"]}>{props.profileName}</div>
                </div>
                <div className={classes["dropdown-content"]}>
                    <a href="/logout">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" focusable="false" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1z"
                                fill="currentColor"></path>
                        </svg> 
                        <span style={{marginLeft: 5+'px', marginRight: 5+'px'}}>Logout</span>
                    </a>
                </div>
            </div>
        )
    }


    return (
        <div className={classes.header}>
            <div className={classes["left-part"]}>
                <a className={classes.ghost} rel="noreferrer noopener" href="https://www.bungie.net" target="_blank"> </a>
                <div className={classes.title}> Destiny 2: Loot Manager </div>
            </div>
            {props.loading ? '' : (!props.user ? <LoginItem /> : <ProfileItem profileImgPath={props.user.imgPath} profileName={props.user.name} />)}
        </div>
    )
}

export default Header;
