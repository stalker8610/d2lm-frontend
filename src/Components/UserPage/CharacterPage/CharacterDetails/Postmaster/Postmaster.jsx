import React from 'react'
import { useEffect } from 'react'
/* import { useParams } from 'react-router-dom' */
/* import Item from '../Items/RegularItem/Item'; */
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostmaster/* , pullFromPostmaster */ } from '@Redux/postmasterSlice';
import Loading from '@Components/Common/Loading/Loading';
import Error from '@Components/Common/Error/Error';
import PostmasterItem from '../Items/PostmasterItem/PostmasterItem';
import classes from './Postmaster.module.scss'

const Postmaster = () => {

    const dispatch = useDispatch();
    const postmasterItems = useSelector(state => state.postmaster.items);
    const status = useSelector(state => state.postmaster.status);
    const error = useSelector(state => state.postmaster.error);
    const pullError = useSelector(state => state.postmaster.pullError);
    const isLoading = status === 'loading';

    useEffect(() => {

        if (status === 'idle') {
            dispatch(fetchPostmaster());
        }

    }, []);


    /* const onTake = async (itemHash, itemInstanceId) => {
        dispatch(pullFromPostmaster({ itemHash, itemInstanceId }));
    } */

    /* const renderTable = () => {

        const renderedItems = postmasterItems.map((item) => <td key={item.itemInstanceId ? item.itemInstanceId : item.itemHash}>
            <Item key={item.itemInstanceId ? item.itemInstanceId : item.itemHash} id={item.itemInstanceId} hash={item.itemHash}
                selector={state => state.postmaster.items.find((value) => value.itemInstanceId ? value.itemInstanceId === item.itemInstanceId :
                    value.itemHash === item.itemHash)}
                availableCommands={['take']}
                onTake={() => onTake(item.itemHash, item.itemInstanceId)} />
        </td>)

        return <table>
            <tbody>
                <tr>
                    {renderedItems.filter((value, index) => index <= 6)}
                </tr>
                {renderedItems.length > 7 && <tr>
                    {renderedItems.filter((value, index) => index >= 7 && index <= 13)}
                </tr>}
                {renderedItems.length > 14 && <tr>
                    {renderedItems.filter((value, index) => index >= 14)}
                </tr>}
            </tbody>
        </table>

    } */


    const items = () => {
        return <div className={classes.postmaster}>
            <div className={classes.title}>
                Postmaster items
            </div>
            {!postmasterItems.length && <div>It's empty now</div>}
            {postmasterItems.map((item) =>
                <PostmasterItem
                    key={item.itemInstanceId || item.itemHash}
                    id={item.itemInstanceId}
                    hash={item.itemHash}
                    item={item}
                />)}
        </div>
    }

    return <div className={classes.wrapper}>
        {!isLoading && items()}
        {error && <div className={classes.errorWrapper}>
            <Error message={`Error occured while fetch postmaster items: ${error}`} />
        </div>}
        {pullError && <div className={classes.errorWrapper}>
            <Error message={`Error occured while pull item from postmaster: ${pullError}`} />
        </div>}
        {isLoading && <div className={classes.loadingWrapper}>
            <Loading />
        </div>}
        {/* { !isLoading && itemInstanceId && <ItemDetails /> } */}
    </div>
    
}

export default Postmaster