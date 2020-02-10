import React from 'react';
import { useDrag } from 'react-dnd'

const ItemTypes = {
    CARD: 'card'
}

const cardSource = {
    beginDrag({ title, cardId, listId }) {
        return {
            title, cardId, listId
        }
    }
}


function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging(),
	}
}

class Item extends React.Component {
    
    render(){
        const text = this.props.taskName;
        const [{ opacity }, dragRef] = useDrag({
          item: { type: ItemTypes.CARD,  text},
          collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
          }),
        })
        return(
            <div ref={dragRef} style={{ opacity }}>
              {text}
            </div>
        )
    }
}
export default Item;