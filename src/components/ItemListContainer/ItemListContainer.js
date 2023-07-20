const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <div className="alert alert-info" role="alert">
                <h1>{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer 