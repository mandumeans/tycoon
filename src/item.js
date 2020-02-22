import React, {useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd'

const ItemTypes = {
    CARD: 'card'
}

const Item = ({ id, index, text, moveCard }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      
      if (dragIndex === hoverIndex) { // 현재 인덱스와 옮기려는 인덱스가 같으면 옮기지 않는다.
        return
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect() // 현재 div에 사각형을 가져와
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2 //Y축 중앙을 구했음 
      const clientOffset = monitor.getClientOffset() // 마우스 위치
      const hoverClientY = clientOffset.y - hoverBoundingRect.top // Y축 최상단을 구함
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.3 : 1
  
  const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
  }

  drag(drop(ref))
  return (
    <div ref={ref} style={{...style, opacity }}>
      {text}
    </div>
  )
}
export default Item;