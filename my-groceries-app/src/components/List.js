import React, {Component} from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        return(
            <ul>
                <ListItem title="Cheese"/>
                <ListItem title="Milk"/>
                <ListItem title="Ristorante Pizza Fungi"/>
                <ListItem title={`Noodles (hot ones)`}/>
                <ListItem title="Ayran"/>
            </ul>
        )
    }
}

export default List