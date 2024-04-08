import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';
// useRecoilState는 atom의 값에 더해서 atom을 수정할 함수를 전달

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    // +를 앞에 붙이면 string을 number로 바꿔준다.

  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
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
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder='Hours'
      />
    </div>
  );
}

export default App;
