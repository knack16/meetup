import classes from './MeetupDetail.module.css';

function MeetupDeatil(props){
    return(
        <section class={classes.detail}>
            <img src={props.image} alt={props.title}/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}
 
export default MeetupDeatil;