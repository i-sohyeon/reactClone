import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

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
const Card =  styled.div`
  border-radius: 5px;
  margin-bottom: 10px;
  background: ${(props) => props.theme.cardColor};
`
const toDos = ["a","b","c","d","e","f","g",]

function App() {
  const onDragEnd = () => {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(magic) => (
              <Board ref={magic.innerRef } {...magic.droppableProps}>
                {toDos.map((todo, index) => <Draggable draggableId={todo} index={index}>
                  {(magic) => (
                    <Card 
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      <span {...magic.dragHandleProps}>⭐</span>
                      {todo}
                    </Card>
                  )}
                </Draggable>)
                }
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
          
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
