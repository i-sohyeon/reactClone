import React from "react";
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const Card =  styled.div`
  border-radius: 5px;
  margin-bottom: 10px;
  background: ${(props) => props.theme.cardColor};
`

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return(
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {/* dnd를 사용할 때, key와 draggabledId는 무조건 같아야한다. */}
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <span {...magic.dragHandleProps}>⭐</span>
          {toDo}
        </Card>
    )}
  </Draggable>
  )
}

export default React.memo(DragabbleCard);