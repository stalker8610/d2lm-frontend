import React from 'react'
import classes from './Loading.module.css'
const imgLoading = require('../../assets/loading.gif')


const Loading = (props) => {

    return (<div className={classes['image-container']}>
        <p className={classes['image-holder']}>
            <img className={classes['loading-img']} src={imgLoading} /* onClick={props.stop} *//>
        </p>
    </div>)

}

export default Loading;