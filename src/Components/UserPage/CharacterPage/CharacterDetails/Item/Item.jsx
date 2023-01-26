import React, { useRef, useState } from 'react'
import classes from './Item.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '@Components/Common/Loading/Loading'
import {currentItemBecomeChanged} from '@Redux/itemsSlice'

const Item = (props) => {

    const itemData = useSelector(props.selector);
    const isEquipped = useSelector(state => state.usedEquipment.items.some(el => el.itemInstanceId === props.id));
    const dispatch = useDispatch();


    const itemRef = useRef(null);

    const [showMenu, toogleMenu] = useState(false);

    let timeout;

    const onMouseEnterItemHandler = () => {
        if (!showMenu) {
            itemRef.current.className = classes.item + " " + classes.activeItem;
            timeout = setTimeout(() => {
                toogleMenu(true);
            }, 100);
        }
    }

    const onMouseLeaveItemHandler = () => {
        timeout = setTimeout(() => {
            itemRef.current.className = classes.item;
            toogleMenu(false);
        }, 100);
    }

    const onMouseEnterMenuHandler = () => {
        if (timeout) {
            clearTimeout(timeout);
        }
    }

    const onMouseLeaveMenuHandler = () => {
        itemRef.current.className = classes.item;
        toogleMenu(false);
    }

    const onClick = () => {
        if (showMenu) toogleMenu(false);
        dispatch(currentItemBecomeChanged());
        props.onClick();
    }

    const onMenuClick = () => {
        toogleMenu(false);
        itemRef.current.className = classes.item;
    }

    const dropdownMenu = () => {

        let commands = [];

        if (props.availableCommands.includes('showItem')) {
            commands.push(<Link className={classes.link} key="show" to={`/equipment/item/${itemData.itemInstanceId}`}>Show item</Link>);
        }

        if (props.availableCommands.includes('showBucket')) {
            commands.push(<Link className={classes.link} key="more" to={`/equipment/bucket/${itemData.bucketHash}`}>Show bucket</Link>);
        }

        if (props.availableCommands.includes('take')) {
            commands.push(<a className={classes.link} key="take" onClick={props.onTake}>Pull</a>);
        }

        return <div
            className={classes.dropdownMenu}
            onMouseEnter={onMouseEnterMenuHandler}
            onMouseLeave={onMouseLeaveMenuHandler}
            onClick={onMenuClick}>
            {commands}
        </div>
    }

    if (props.notFound) {
        return <div className={classes.itemWrapper}>
            <div className={`${classes.item} ${classes['not-found']}`} />
        </div>
    } else if (props.loading) {
        return <div className={classes.itemWrapper}>
            <div className={`${classes.item} ${classes['loading']}`}>
                <Loading/>
            </div>
        </div>
    } else {
        return <div className={props.selected ? `${classes.itemWrapper} ${classes.selected}` : classes.itemWrapper}>
            <div ref={itemRef}
                className={classes.item}
                onClick={onClick}
                onMouseEnter={onMouseEnterItemHandler}
                onMouseLeave={onMouseLeaveItemHandler}
                style={{ backgroundImage: `url('https://www.bungie.net${itemData.data.displayProperties.icon}')` }}>
                {itemData.quantity > 1 && <div className={classes.quantity}>x{itemData.quantity}</div>}
            </div>
            {showMenu && dropdownMenu()}
        </div>
    }

    /* return <div className={classes.wrapper}>
        <NavDropdown id='nav-dropdown' title={ItemImage()}>
            {props.availableCommands.includes('showItem') && <NavDropdown.Item eventKey="show" href={`/equipment/item/${itemData.itemInstanceId}`} as="div">
                <Nav.Link as={Link} to={`/equipment/item/${itemData.itemInstanceId}`}> Show
                </Nav.Link>
            </NavDropdown.Item>}

            {props.availableCommands.includes('showBucket') && <div>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="more" href={`/equipment/bucket/${itemData.bucketHash}`} as="div">
                    <Nav.Link as={Link} to={`/equipment/bucket/${itemData.bucketHash}`}> More...
                    </Nav.Link>
                </NavDropdown.Item>
            </div>}

            {props.availableCommands.includes('take') && <NavDropdown.Item eventKey="take" as="div">
                <Nav.Link onClick={props.onTake}> Take
                </Nav.Link>
            </NavDropdown.Item>}
        </NavDropdown>
    </div> */

}
export default Item