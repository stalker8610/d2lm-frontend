import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetails, itemRendered } from '@Redux/itemsSlice';
import Error from '@Components/Common/Error/Error';
import Loading from '@Components/Common/Loading/Loading';
import classes from './ItemDetails.module.css'


const ItemDetails = (props) => {

    const dispatch = useDispatch();

    const { itemInstanceId } = useParams();
    const itemData = useSelector(state => state.items.items.find((value) => value.itemInstanceId === itemInstanceId));

    const status = useSelector(state => state.items.status);
    const error = useSelector(state => state.items.error);

    const itemsAll = useSelector(state => state.items.items);

    const isLoading = (status === 'loading');

    debugger

    useEffect(() => {

        if (itemInstanceId && status === 'idle') {
            dispatch(fetchItemDetails(itemInstanceId));
        }

        return ()=>{
            dispatch(itemRendered());
        }

    }, [itemInstanceId, dispatch]);


    const Stat = (props) => {
        return <div className={classes.regular}>
            <span> {props.name}</span>
            <span> {props.value}</span>
        </div>
    }

    

    if (error) {
        return <Error message={`Error while fetching item details with id ${itemInstanceId}: ${error}`} />
    } else if (isLoading) {
        return <Loading />
    } else if (itemData) {

        return (
            <div className={classes.background} style={{ backgroundImage: "url(" + `https://bungie.net${itemData.screenshot}` + ")" }}>
                <div className={classes.panel}>
                    <div className={classes.large}>
                        {itemData.displayProperties.name}
                    </div>
                    <div className={classes.regular}>
                        {itemData.itemTypeDisplayName}
                    </div>
                    <hr style={{marginTop: 10+'px'}}/>
                    {itemData.stats.map((el) =>
                        <Stat key={el.statHash} name={el.name} value={el.value} />)
                    }
                </div>
            </div>)
    }

}

export default ItemDetails