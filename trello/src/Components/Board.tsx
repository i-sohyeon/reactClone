import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";

const Wrapper =  styled.div`
  padding: 30px 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.boardColor};
  min-height: 180px;
`

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
  return (
    <Droppable droppableId='boardId'>
      {(magic) => (
        <Wrapper ref={magic.innerRef } {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} index={index} toDo={toDo} />
          ))}
          {magic.placeholder}
          {/* 카드 dragndrop을 실행할때 배경카드의 높이가 변하지 않게 해줌 */}
        </Wrapper>
      )}
    </Droppable> 
  )
}

export default Board;