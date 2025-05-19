export default function Inputs({title,onChange})
{

    return(
        <div>
        <label>{title}</label>
        <input onChange={(event)=>onChange(parseFloat(event.target.value==""?0:event.target.value))}></input>
        </div>
    );
}