import classes from './Error.module.css'

const Error = (props)=>{
    return <div className={classes.error}>
        {props.message}
    </div>
}

export default Error;