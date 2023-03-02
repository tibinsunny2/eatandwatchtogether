import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
function Reviews({ items }) {
    console.log(items);
    return (
        <ListGroup>
            <ListGroupItem>
                <h3>{items.name}</h3>
                <h4>rating:{items.rating}</h4>
                <p>{items.date}</p>
                <p>{items.comments}</p>
            </ListGroupItem>
        </ListGroup>
    )
}

export default Reviews