import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BucketItem from '../Items/BucketItem/BucketItem';
import ItemDetails from '../Items/ItemDetails/ItemDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBucketEquipment } from '@Redux/bucketEquipmentSlice';
import Loading from '@Components/Common/Loading/Loading';
import Error from '@Components/Common/Error/Error';
import classes from './BucketEquipment.module.scss';

const BucketEquipment = () => {

    const dispatch = useDispatch();
    const { bucketHash } = useParams();
    const bucketItems = useSelector(state => state.bucketEquipment.items);
    const bucketDescription = useSelector(state=>state.bucketEquipment.bucketDescription);
    const status = useSelector(state => state.bucketEquipment.status);
    const error = useSelector(state => state.bucketEquipment.error);
    const isLoading = status === 'loading';

    const { itemInstanceId } = useParams();

    useEffect(() => {

        if (status === 'idle') {
            dispatch(fetchBucketEquipment(bucketHash));
        }

    }, [bucketHash, status, dispatch]);

    const items = () => {
        return <div className={classes.bucket}>
            <div className={classes.title}>
                {bucketDescription?.name}
            </div>
            {!bucketItems.length && <div>It's empty now</div>}
            {bucketItems.map((item) =>
                <BucketItem
                    key={item.itemInstanceId}
                    id={item.itemInstanceId}
                    hash={item.itemHash}
                    item={item}
                    bucketHash={bucketHash}
                />)}
        </div>
    }

    return <div className={classes.wrapper}>
        {!isLoading && items()}
        {error && <div className={classes.errorWrapper}>
            <Error message={`Error while bucket equipment fetch: ${error}`} />
            </div>}
        {isLoading && <div className={classes.loadingWrapper}>
            <Loading />
        </div>}
        {!isLoading && itemInstanceId && <ItemDetails />}

        
    </div>
}

export default BucketEquipment