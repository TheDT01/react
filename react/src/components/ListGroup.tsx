// {item: [], heading: string}
interface Props {
    item: string[];
    heading: string;
}


import { useState } from "react";


function ListGroup({ item, heading }: Props) {


    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>{heading}</h1>
            {item.length === 0 && <p>no item found</p>}
            <ul className="list-group">
                {item.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
