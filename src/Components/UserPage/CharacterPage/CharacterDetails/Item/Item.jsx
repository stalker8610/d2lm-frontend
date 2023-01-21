import React, { useRef, useState, useEffect } from 'react'
import classes from './Item.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Item = (props) => {

    const itemData = useSelector(props.selector);
    const isEquipped = useSelector(state => state.usedEquipment.items.some(el => el.itemInstanceId === props.id));

    const menuRef = useRef(null);
    const itemRef = useRef(null);

    const [showMenu, toogleMenu] = useState(false);

    useEffect(() => {

        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && !itemRef.current.contains(event.target)) {
                itemRef.current.className = classes.item;
                toogleMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [menuRef]);

    const onItemClick = () => {
        itemRef.current.className = classes.item + " " + classes.activeItem;
        toogleMenu(true);
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
            commands.push(<Link className={classes.link} key="take" to={`#`} onClick={props.onTake}>Show bucket</Link>);
        }

        return <div ref={menuRef} className={classes.dropdownMenu}>
            {commands}
        </div>
    }


    return <div ref={itemRef}
        className={classes.item}
        onClick={onItemClick}
        style={{ backgroundImage: `url('https://www.bungie.net${itemData.data.displayProperties.icon}')` }}>
        {showMenu && dropdownMenu()}
    </div>

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