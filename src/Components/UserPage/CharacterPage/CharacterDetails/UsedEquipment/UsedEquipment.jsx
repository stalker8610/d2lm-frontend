import { useEffect } from 'react'
import classes from './UsedEquipment.module.css'
import Item from '../Item/Item'
import Loading from '@Components/Common/Loading/Loading'
import Error from '@Components/Common/Error/Error'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsedEquipment } from '@Redux/usedEquipmentSlice'

const UsedEquipment = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.usedEquipment.status);
    const error = useSelector(state => state.usedEquipment.error);
    const isLoading = (status === 'loading');

    const selectedCharacter = useSelector(state => state.user.selectedCharacter);
    const usedEquipment = useSelector(state => state.usedEquipment.items);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsedEquipment());
        }

    }, [selectedCharacter, status, dispatch]);


    const renderItem = (item) => {

        return <Item id={item.itemInstanceId} hash={item.itemHash}
            selector={state => state.usedEquipment.items.find((value) => value.itemInstanceId === item.itemInstanceId)} 
            availableCommands = {['showItem', 'showBucket']}/>
    }

    return (
        <div className={classes.wrapper}>

            {error && <Error message={`Error while used equipment fetch: ${error}`} />}
            {isLoading && <Loading />}
            {!isLoading && usedEquipment.length &&
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <td> {renderItem(usedEquipment[0])} </td>
                            <td> {renderItem(usedEquipment[3])} </td>
                        </tr>
                        <tr>
                            <td> {renderItem(usedEquipment[1])} </td>
                            <td> {renderItem(usedEquipment[4])} </td>
                        </tr>
                        <tr>
                            <td> {renderItem(usedEquipment[2])} </td>
                            <td> {renderItem(usedEquipment[5])} </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> {renderItem(usedEquipment[6])} </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> {renderItem(usedEquipment[7])} </td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )

}

export default UsedEquipment