import React from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import DragabbleCard from './Components/DragabbleCard';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`
const Board =  styled.div`
  padding: 30px 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.boardColor};
  min-height: 180px;
`
const toDos = ["a","b","c","d","e","f","g"]

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId, destination, source}:DropResult) => {
    // onDragEnd는 함수가 끝났을 때 실행되는 함수
    if (!destination) return;
    setToDos(oldToDos => {
      const copyToDos = [...oldToDos];
      // 1) Delete item on source.index
      copyToDos.splice(source.index, 1);
      // 2) Put back the item on the destination.index
      copyToDos.splice(destination?.index, 0, draggableId)
      return copyToDos;
    })
    
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(magic) => (
              <Board ref={magic.innerRef } {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
                {/* 카드 dragndrop을 실행할때 배경카드의 높이가 변하지 않게 해줌 */}
              </Board>
            )}
          </Droppable> 
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
