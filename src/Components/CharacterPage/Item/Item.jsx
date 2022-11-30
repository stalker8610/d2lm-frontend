import React from 'react'
import classes from './Item.module.css'
import { Image, Dropdown, DropdownButton } from 'react-bootstrap'


const Item = (props) => {

    const Img = () => {
        return <Image bsPrefix={classes.img} className={classes.img} src={`https://www.bungie.net${props.icon}`} />;
    }

    return <div>
        <DropdownButton variant='outline-secondary' title={Img()}>
            <Dropdown.Item onClick={props.showItem}> Show </Dropdown.Item>
            
            {props.equipable && <Dropdown.Item> Use </Dropdown.Item>}
            {props.moveable && <Dropdown.Item onClick={props.moveToVault}> Move to vault</Dropdown.Item>}

            {props.used && <div><Dropdown.Divider /> 
                <Dropdown.Item onClick={props.showFullEquipment}> Show more... </Dropdown.Item>
                </div>}

        </DropdownButton>
    </div>

}
export default Item