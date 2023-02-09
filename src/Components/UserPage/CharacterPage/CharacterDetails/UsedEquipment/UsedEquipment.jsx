import { useEffect } from 'react'
import classes from './UsedEquipment.module.scss'
/* import Item from '../Item/Item' */
import EquippedItem from '../Items/EquippedItem/EquippedItem'
import Error from '@Components/Common/Error/Error'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUsedEquipment } from '@Redux/usedEquipmentSlice'
import ItemDetails from '../Items/ItemDetails/ItemDetails'

const UsedEquipment = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.usedEquipment.status);
    const error = useSelector(state => state.usedEquipment.error);
    const isLoading = (status === 'loading');

    const { itemInstanceId } = useParams();

    const selectedCharacter = useSelector(state => state.user.selectedCharacter);
    const usedEquipment = useSelector(state => state.usedEquipment.items);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsedEquipment());
        }
    }, [selectedCharacter, status, dispatch]);


    const renderItem = (item) => {
        return <EquippedItem
            notFound={error}
            loading={isLoading}
            key={item?.itemInstanceId || Math.random()}
            selected={item?.itemInstanceId === itemInstanceId}
            item={item}
        />
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
            {error && <div className={classes.errorWrapper}>
                <Error message={`Error occured: ${error}`} />
            </div>}
            {itemInstanceId && <ItemDetails />}
        </div>
    )

}

export default UsedEquipment