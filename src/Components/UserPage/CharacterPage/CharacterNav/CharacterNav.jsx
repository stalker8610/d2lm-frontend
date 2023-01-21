import { NavLink } from "react-router-dom";
import classes from './CharacterNav.module.css';

export default () => {

    return (
        <div className={classes.menu}>
            <NavLink to="/equipment" title="Show equipped items" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>Equipment</NavLink>
            <NavLink to="/postmaster" title="Pull items from the Postmaster" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>Postmaster</NavLink>
            <NavLink to="/vault" title="Pull items from the vault" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>Vault</NavLink>
        </div>
    )

}

