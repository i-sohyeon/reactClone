import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import Board from './Components/Board';

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
const toDos = ["a","b","c","d","e","f","g"]

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId, destination, source}:DropResult) => {
    // onDragEnd는 함수가 끝났을 때 실행되는 함수
    if (!destination) return;
    // setToDos(oldToDos => {
    //   const copyToDos = [...oldToDos];
    //   // 1) Delete item on source.index
    //   copyToDos.splice(source.index, 1);
    //   // 2) Put back the item on the destination.index
    //   copyToDos.splice(destination?.index, 0, draggableId)
    //   return copyToDos;
    // })
    
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
      <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
