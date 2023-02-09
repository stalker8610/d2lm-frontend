import Item from '../RegularItem/Item'
import { Link, useNavigate } from 'react-router-dom'

const EquippedItem = (props) => {

    const item = props.item;
    const navigate = useNavigate();

    const selector = (state) => {
        return state.usedEquipment.items
            .find((value) => value.itemInstanceId === item.itemInstanceId)
    }

    const onClick = () => {
        navigate(`/equipment/item/${item.itemInstanceId}`, { replace: true });
    }

    const getMenuCommands = () => {
        return [
            <Link key="showItem" to={`/equipment/item/${item?.itemInstanceId}`}>Show item</Link>,
            <Link key="showBucket" to={`/equipment/bucket/${item?.bucketHash}`}>Show bucket</Link>
        ]
    }

    return <Item
        notFound={props.notFound}
        loading={props.loading}
        selected={props.selected}
        key={item?.itemInstanceId || Math.random()}
        id={item?.itemInstanceId}
        hash={item?.itemHash}
        selector={selector}
        menu={getMenuCommands()}
        onClick={onClick}
    />

}

export default EquippedItem;