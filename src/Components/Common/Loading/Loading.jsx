import React from 'react'
import classes from './Loading.module.css'
/* const imgLoading = require('./loading.gif') */

import imgLoading from './loading.gif'

const Loading = (props) => {

    /* return (<div className={classes['image-container']}>
        <img className={classes['loading-img']} src={imgLoading} />
    </div>) */

    return <img className={classes.centered}
        width={props.width ? props.width : '32px'}
        height={props.height ? props.height : '32px'} src={imgLoading} alt='loading' />

}

export default Loading;