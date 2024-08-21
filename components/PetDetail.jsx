const PetDetail = (props) => {

    if(!props.selected)
        return (
        <div>
            <h1>NO DETAILS</h1>
        </div>
    );
    
    return ( 
        <>
            <div>
                <h1>{props.selected.name}</h1>
                <h3>
                    Age: {props.selected.age} {props.selected.age > 1 ? 'years' : 'year'} old
                </h3>
                <h3>Breed: {props.selected.breed}</h3>
                <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
                <button onClick={() => props.handleRemovePet(props.selected._id)}>Delete</button>
            </div>
        </> 
    )
}
 
export default PetDetail;