import React, {Component} from 'react'


class List extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        return(
            <ul>
                <li>Cheese</li>
                <li>Milk</li>
                <li>Ristorante Pizza Fungi</li>
                <li>Noodles {`(hot ones)`}</li>
                <li>Ayran</li>
            </ul>
        )
    }
}

export default List