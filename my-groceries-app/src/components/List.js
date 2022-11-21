import React, {Component} from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    onItemClick = (item) =>{
        console.log(`item id: ${item.id}, item-title: ${item.title}`)
    }

    render(){
        const groceryItems = 
            this.state.groceryItems
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