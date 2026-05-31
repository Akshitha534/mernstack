//function props(props){
return <h2>{props.name}</h2>


function props(name, role, description){
    return (
        <div>
            <h2>{name}</h2>
            <h4>{role}</h4>
            <p>{description}</p>
            <button>View Profile</button>
        </div>
    )
}
export default props;