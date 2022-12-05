import React from 'react'
import classes from './Item.module.css'
import { Link } from 'react-router-dom'
import { Image, NavDropdown, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const Item = (props) => {

    const itemData = useSelector(state =>
        state.usedEquipment.items.find((value) => value.itemInstanceId === props.id)
    );

    const ItemImage = () => {
        return <Image bsPrefix={classes.img} className={classes.img} src={`https://www.bungie.net${itemData.data.displayProperties.icon}`} />;
    }

    /*  return <div className={classes.wrapper}>
         <DropdownButton variant='outline-secondary' title={Img()}>
             <Dropdown.Item onClick={props.showItem} > Show </Dropdown.Item>
             
             {props.equipable && <Dropdown.Item> Use </Dropdown.Item>}
             {props.moveable && <Dropdown.Item onClick={props.moveToVault}> Move to vault</Dropdown.Item>}
 
             {used && <div><Dropdown.Divider /> 
                 <Dropdown.Item onClick={props.showFullEquipment} as="Link" to={`${props.itemId}`}> Show more... </Dropdown.Item>
                 </div>}
 
         </DropdownButton>
     </div> */

    /* transform: translate(100px, 0px); */

    return <div className={classes.wrapper}>
        <NavDropdown id='nav-dropdown' title={ItemImage()}>
            <NavDropdown.Item eventKey="show" href={`/equipment/item/${itemData.itemInstanceId}`} as="div">
                <Nav.Link as={Link} to={`/equipment/item/${itemData.itemInstanceId}`}> Show
                </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="more" href={`/equipment/bucket/${itemData.bucketHash}`} as="div">
                <Nav.Link as={Link} to={`/equipment/bucket/${itemData.bucketHash}`}> More...
                </Nav.Link>
            </NavDropdown.Item>
        </NavDropdown>
    </div>

}
export default Item