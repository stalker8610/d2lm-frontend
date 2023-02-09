import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetails, currentItemImgLoaded, currentItemRendered, currentItemBecomeChanged } from '@Redux/itemsSlice';
import Error from '@Components/Common/Error/Error';
import Loading from '@Components/Common/Loading/Loading';
import classes from './ItemDetails.module.scss'


const ItemDetails = (props) => {

    const dispatch = useDispatch();

    const { itemInstanceId } = useParams();
    const itemData = useSelector(state => state.items.items.find((value) => value.itemInstanceId === itemInstanceId));

    const status = useSelector(state => state.items.status);
    const error = useSelector(state => state.items.error);

    const [imgLoaded, setImgLoaded] = useState(false);
    const isLoading = (status === 'loading' || (status === 'succeded' && !imgLoaded));

    useEffect(()=>{
        return ()=>{
            dispatch(currentItemBecomeChanged());  
        }
    },[dispatch])

    useEffect(()=>{
        dispatch(currentItemBecomeChanged());  
    },[itemInstanceId, dispatch])

    useEffect(() => {
        if (itemInstanceId && status === 'idle') {
            dispatch(fetchItemDetails(itemInstanceId));
        } else if (itemInstanceId && status === 'succeeded') {
            dispatch(currentItemRendered(itemInstanceId));
            if (itemData?.screenshot && window.innerWidth > 568) {
                let img = new Image();
                img.onload = () => {
                    setImgLoaded(true);
                    dispatch(currentItemImgLoaded());
                }
                img.src = `https://bungie.net${itemData.screenshot}`;
            } else {
                setImgLoaded(true);
                dispatch(currentItemImgLoaded());
            }
        }

    }, [itemInstanceId, itemData, status, dispatch]);

    const Stat = (props) => {

        return <div className={classes.stat}>
            <div className={classes.statName}>
                {props.name}
            </div>
            {!props.odd && <div className={classes.statValue}>
                <div className={classes.statBar}>
                    <div style={{ width: props.value * props.statCategory + '%' }} />
                </div>
            </div>}
            <div>
                {props.value}
            </div>
        </div>
    }


    return <div className={classes.wrapper}>
        {isLoading && <div className={classes.loadingWrapper}>
            <Loading />
        </div>}
        {error && <Error message={`Error while fetching item details with id ${itemInstanceId}: ${error}`} />}
        {!error && !isLoading && <div className={classes.panel}>
            <div className={classes.background} style={(window.innerWidth < 576 && { backgroundImage: `url('https://bungie.net${itemData?.screenshot}')` }) || {}} />
            <div className={classes.header}>
                <div className={classes.large}>
                    {itemData?.displayProperties.name}
                </div>
                <div style={{ display: "inline-block" }}>
                    {itemData?.itemTypeDisplayName}
                </div>
                <div style={{ float: "right" }}>
                    open <a rel="noreferrer" href={`https://www.light.gg/db/items/${itemData?.itemHash}`} target="_blank">light.gg</a>
                </div>
            </div>
            <div className={classes.ordinaryStats}>
                {itemData?.stats.map(el =>
                    !el.odd && <Stat key={el.hash} name={el.displayProperties.name} value={el.value} odd={el.odd} statCategory={el.statCategory} />
                )}
            </div>
            <div className={classes.oddStats}>
                {itemData?.stats.map(el =>
                    el.odd && <Stat key={el.hash} name={el.displayProperties.name} value={el.value} odd={el.odd} statCategory={el.statCategory} />
                )}
            </div>
        </div>}
    </div>

}

export default ItemDetails