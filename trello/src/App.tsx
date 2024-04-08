import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';
// useRecoilState는 atom의 값에 더해서 atom을 수정할 함수까지 준다

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    // +를 앞에 붙이면 string을 number로 바꿔준다.

  }
  return (
    <div>
      <input 
        value={minutes}
        onChange={onMinutesChange}
        // onChange이벤트가 없다면 input에서 수정할 수 없음
        type="number"
        placeholder='Minutes'
      />
      <input value={hours} type="number" placeholder='Hours'/>
    </div>
  );
}

export default App;
