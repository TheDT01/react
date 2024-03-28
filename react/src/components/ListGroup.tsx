function ListGroup() {
    const item = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
    ];

    return (
        <>
            <h1>tor bap</h1>
            <ul className="list-group">
                {item.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
