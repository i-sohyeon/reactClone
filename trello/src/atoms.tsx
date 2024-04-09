import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number> ({
  key: "hours",
  get: ({get}) => {
    const minutes = get(minuteState);
    return minutes / 60;
  }, 
  set: ({set}, newValue) => {
    const minutes = Number(newValue) * 60;
    console.log(newValue);
    set(minuteState, minutes);
  },
  // set은 state를 set하게 도와주는 속성
});