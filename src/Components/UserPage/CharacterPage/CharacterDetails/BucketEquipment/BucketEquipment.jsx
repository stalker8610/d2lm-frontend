import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBucketEquipment } from '@Redux/bucketEquipmentSlice';
import Loading from '@Components/Common/Loading/Loading';
import Error from '@Components/Common/Error/Error';

const BucketEquipment = () => {

    const dispatch = useDispatch();
    const { bucketHash } = useParams();
    const bucketItems = useSelector(state => state.bucketEquipment.items);
    const status = useSelector(state => state.bucketEquipment.status);
    const error = useSelector(state => state.bucketEquipment.error);
    const isLoading = status === 'loading';

    useEffect(() => {

        if (status === 'idle') {
            dispatch(fetchBucketEquipment(bucketHash));
        }

    }, [bucketHash]);

    const renderTable = () => {

        const renderedItems = bucketItems.map((item) => <td>
            <Item key={item.itemInstanceId} id={item.itemInstanceId} hash={item.itemHash}
                selector={state => state.bucketEquipment.items.find((value) => value.itemInstanceId === item.itemInstanceId)} 
                availableCommands={['showItem']}/>
        </td>)

        return <table>
            <tbody>
                <tr>
                    {renderedItems.filter((value, index) => index <= 2)}
                </tr>
                {renderedItems.length > 3 && <tr>
                    {renderedItems.filter((value, index) => index >= 3 && index <= 5)}
                </tr>}
                {renderedItems.length > 6 && <tr>
                    {renderedItems.filter((value, index) => index >= 6)}
                </tr>}
            </tbody>
        </table>

    }

    return <div>

        {error && <Error message={`Error while bucket equipment fetch: ${error}`} />}
        {isLoading && <Loading />}
        {!isLoading && bucketItems.length && renderTable()}

    </div>
}

export default BucketEquipment