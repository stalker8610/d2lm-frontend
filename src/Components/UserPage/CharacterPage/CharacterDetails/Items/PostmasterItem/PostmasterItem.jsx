import Item from '../RegularItem/Item'
import { Link/* , useNavigate */ } from 'react-router-dom'
import { pullFromPostmaster } from '@Redux/postmasterSlice'
import { useDispatch } from 'react-redux'


const PostmasterItem = (props) => {

    const item = props.item;
    /* const navigate = useNavigate(); */
    const dispatch = useDispatch();

    const selector = (state) => {
        return state.postmaster.items
            .find((value) => value.itemInstanceId === item.itemInstanceId)
    }

    const onClick = () => {
        /* navigate(`/postmaster/item/${item.itemInstanceId}`, { replace: true }); */
    }

    const pull = async (event, itemHash, itemInstanceId) => {
        event.preventDefault();
        dispatch(pullFromPostmaster({ itemHash, itemInstanceId }));
    }


    const getMenuCommands = () => {
        return [
            <Link key="pullItem" to={`/postmaster`} onClick={(e) => pull(e, item?.itemHash, item?.itemInstanceId)}>Pull</Link>
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

export default PostmasterItem;