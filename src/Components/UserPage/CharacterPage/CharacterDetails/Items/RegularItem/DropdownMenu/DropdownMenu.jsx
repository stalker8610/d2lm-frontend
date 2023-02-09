import classes from './DropdownMenu.module.scss'

const DropdownMenu = (props) => {
    return <div 
        className={`${classes.dropdownMenu} ${props.rightAligned && classes.rightAligned}`}
        onMouseEnter={props.onMouseEnterMenuHandler}
        onMouseLeave={props.onMouseLeaveMenuHandler}
        onClick={props.onClick}>
        {props.commands}
    </div>
}

export default DropdownMenu