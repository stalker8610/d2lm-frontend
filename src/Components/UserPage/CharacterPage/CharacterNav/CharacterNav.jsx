import { NavLink } from "react-router-dom";
import classes from './CharacterNav.module.scss';

const CharacterNav = () => {

    const getClassName = (disabled = false) => {

        return ({ isActive }) => {
            if (disabled) {
                return `${classes.link} ${classes.disabled}`;
            }

            return isActive ? `${classes.link} ${classes.active}` : classes.link;
        }
    }

    return (
        <div className={classes.nav}>
            <NavLink to="/equipment" title="Show equipped items" className={getClassName()}>Equipment</NavLink>
            <NavLink to="/postmaster" title="Pull items from the Postmaster" className={getClassName()}>Postmaster</NavLink>
            <NavLink to="/vault" title="Pull items from the vault" className={getClassName(true)}>Vault</NavLink>
        </div>
    )

}

export default CharacterNav;

