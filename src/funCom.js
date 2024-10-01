export default function Users(props) {
    console.log(props.name);
    
    return (
        <div>
            <h1>{props.name[1]}</h1>
            <h1>{props.email[1]}</h1>
            <h1>{props.other.Address}</h1>
            <h1>{props.other.State}</h1>
        </div>
    );
}

