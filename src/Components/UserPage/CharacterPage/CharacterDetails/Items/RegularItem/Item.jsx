import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '@Components/Common/Loading/Loading'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import classes from './Item.module.css'

const Item = (props) => {

    const itemData = useSelector(props.selector);
    const itemRef = useRef(null);
    
    const [showMenu, toogleMenu] = useState(false);
    const [rightAlignedMenu, setMenuRightAlign] = useState(false);


    useLayoutEffect(() => {
        
        const onResize = () => {
            if (itemRef.current) {
                const rect = itemRef.current.getBoundingClientRect();
                if (rect.right + 60 >= window.innerWidth) {
                    setMenuRightAlign(true);
                } else if (rightAlignedMenu){
                    setMenuRightAlign(false);
                }
            }
        }

        window.addEventListener('resize', onResize);

        onResize();

        return ()=>{
            window.removeEventListener('resize', onResize);
        }

    }, [itemRef]);


    let timeout;
    const onMouseEnterItemHandler = () => {
        if (!showMenu) {
            itemRef.current.className = classes.item + " " + classes.activeItem;
            timeout = setTimeout(() => {
                toogleMenu(true);
            }, 100);
        }
    }

    const onMouseLeaveItemHandler = () => {
        timeout = setTimeout(() => {
            itemRef.current.className = classes.item;
            toogleMenu(false);
        }, 100);
    }

    const onMouseEnterMenuHandler = (e) => {
        if (timeout) {
            clearTimeout(timeout);
        }
    }

    const onMouseLeaveMenuHandler = () => {
        itemRef.current.className = classes.item;
        toogleMenu(false);
    }

    const onClick = () => {
        if (showMenu) toogleMenu(false);
        props.onClick();
    }

    const onMenuClick = () => {
        toogleMenu(false);
        itemRef.current.className = classes.item;
    }


    if (props.notFound) {
        return <div className={classes.itemWrapper}>
            <div className={`${classes.item} ${classes['not-found']}`} />
        </div>
    } else if (props.loading) {
        return <div className={classes.itemWrapper}>
            <div className={`${classes.item} ${classes['loading']}`}>
                <Loading />
            </div>
        </div>
    } else {
        return <div className={props.selected ? `${classes.itemWrapper} ${classes.selected}` : classes.itemWrapper}>
            <div ref={itemRef}
                className={classes.item}
                onClick={onClick}
                onMouseEnter={onMouseEnterItemHandler}
                onMouseLeave={onMouseLeaveItemHandler}
                style={{ backgroundImage: `url('https://www.bungie.net${itemData.data.displayProperties.icon}')` }}>
                {itemData.quantity > 1 && <div className={classes.quantity}>x{itemData.quantity}</div>}
            </div>
            {showMenu &&
                <DropdownMenu 
                    itemInstanceId={itemData.itemInstanceId}
                    bucketHash={itemData.bucketHash}
                    onMouseEnterMenuHandler={onMouseEnterMenuHandler}
                    onMouseLeaveMenuHandler={onMouseLeaveMenuHandler}
                    onClick={onMenuClick}
                    commands={props.menu}
                    rightAligned={rightAlignedMenu}
                />}
        </div>
    }

}
export default Item