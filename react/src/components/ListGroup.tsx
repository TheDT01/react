function ListGroup() {
    let item = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
    ];

    item = [];



    const getMessage = () => {
        return item.length === 0 ? <p>No item found</p> : null;
    }

    return (
        <>
            <h1>tor bap</h1>
            {getMessage()}
            <ul className="list-group">
                {item.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
