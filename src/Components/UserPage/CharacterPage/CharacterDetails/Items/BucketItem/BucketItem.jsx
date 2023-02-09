import Item from '../RegularItem/Item'
import { Link, useNavigate } from 'react-router-dom'

const BucketItem = (props) => {

    const item = props.item;
    const navigate = useNavigate();

    const selector = (state) => {
        return state.bucketEquipment.items
            .find((value) => value.itemInstanceId === item.itemInstanceId)
    }

    const onClick = () => {
        navigate(`/equipment/bucket/${props.bucketHash}/item/${item.itemInstanceId}`, { replace: true });
    }

    const useItem = () => {
        alert('use it! now!');
    }

    const getMenuCommands = () => {
        return [
            <Link key="showItem" to={`/equipment/bucket/${props.bucketHash}/item/${item?.itemInstanceId}`}>Show item</Link>,
            <Link key="useItem" to={`/equipment`} onClick={useItem}>Use</Link>,
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

export default BucketItem;