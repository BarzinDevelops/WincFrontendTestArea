import React, {Component} from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor(){
        super()
        this.state = {
            groceryItems: [
                {id: 1, title : "Cheese" },
                {id: 2, title : "Milk" },
                {id: 3, title : "Ristorante Pizza Fungi" },
                {id: 4, title : "Noodles (hot ones)" },
                {id: 5, title : "Ayran" }
            ],
        }
    }

    onItemClick = (item) =>{
        console.log(`item id: ${item.id}, item-title: ${item.title}`)
    }

    render(){
        const groceryItems = this.state.groceryItems
                                .map(item => 
                                            <ListItem 
                                                key={item.id} 
                                                item={item} 
                                                clickItem={() => this.onItemClick(item)}
                                            />
                                 );
        return(
            <ul className='listitems-wrapper'>
                {groceryItems}
            </ul>
        );
    }
}

export default List;