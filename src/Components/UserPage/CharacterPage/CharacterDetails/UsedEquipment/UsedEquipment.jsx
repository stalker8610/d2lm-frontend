import { useEffect } from 'react'
import classes from './UsedEquipment.module.css'
import Item from '../Item/Item'
import Loading from '@Components/Common/Loading/Loading'
import Error from '@Components/Common/Error/Error'

import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchUsedEquipment } from '@Redux/usedEquipmentSlice'
import ItemDetails from '../Item/ItemDetails/ItemDetails'

const UsedEquipment = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.usedEquipment.status);
    const error = useSelector(state => state.usedEquipment.error);
    const isLoading = (status === 'loading');

    const { itemInstanceId } = useParams();
    const navigate = useNavigate();

    const selectedCharacter = useSelector(state => state.user.selectedCharacter);
    const usedEquipment = useSelector(state => state.usedEquipment.items);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsedEquipment());
        }

    }, [selectedCharacter, status, dispatch]);

    const onClick = (itemInstanceId) => {
        navigate(`/equipment/item/${itemInstanceId}`, { replace: true });
    }

    const renderItem = (item) => {

        if (isLoading) {
            return <Item key={Math.random()} selector={()=>{}} loading />
        } else if (error) {
            return <Item key={Math.random()} selector={()=>{}} notFound />
        } else {
            return <Item key={item.itemInstanceId} id={item.itemInstanceId} hash={item.itemHash}
                selector={state => state.usedEquipment.items.find((value) => value.itemInstanceId === item.itemInstanceId)}
                availableCommands={['showItem', 'showBucket']}
                onClick={()=>onClick(item.itemInstanceId)}
                selected={item.itemInstanceId === itemInstanceId}
                loading={isLoading} />
        }
    }

    const renderEquipment = () => {

        if (isLoading || error) {
            return <div>
                <div className={classes.weapons}>
                    <div className={classes.title}>Weapons</div>
                    {(new Array(3).fill(0)).map(() => renderItem())}

                </div>
                <div className={classes.armor}>
                    <div className={classes.title}>Armor</div>
                    {(new Array(5).fill(0)).map(() => renderItem())}
                </div>
            </div>
        }

        return <div>
            <div className={classes.weapons}>
                <div className={classes.title}>Weapons</div>
                {usedEquipment.map((item, index) => {
                    if (index < 3) return renderItem(item);
                    else return null;
                })}
            </div>
            <div className={classes.armor}>
                <div className={classes.title}>Armor</div>
                {usedEquipment.map((item, index) => {
                    if (index >= 3 && index <= 7) return renderItem(item);
                    else return null;
                })}
            </div>
        </div>
    }

    return (
        <div className={classes.wrapper}>
            {renderEquipment()}
            {error && <Error message={`Error occured: ${error}`} />}
            {itemInstanceId && <ItemDetails />}
        </div>
    )

}

export default UsedEquipment