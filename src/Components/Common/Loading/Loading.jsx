import React from 'react'
import classes from './Loading.module.css'
const imgLoading = require('./loading.gif')


const Loading = (props) => {

    return (<div className={classes['image-container']}>
        <img className={classes['loading-img']} src={imgLoading} />
    </div>)

}

export default Loading;