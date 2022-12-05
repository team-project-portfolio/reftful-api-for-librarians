import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './utils/slices/modalSlice';
import submitSlice from './utils/slices/submitSlice';

const store = configureStore({
    reducer: {
        modalSlice,
        submitSlice,
    }
});

export default store;
export const getState = store.getState();
export type RootState = ReturnType<typeof store.getState>
//ReturnType<> 제네릭이 함수의 리턴값에서 타입을 추론한다.
//그러나 반환되는 함수의 리턴 값 != 리턴값의 타입
//ReturnType<>이 추론할 수 있도록, 함수의 반환 '값'아 아니라, type을 명시해주기 위해 typeof 사용

//store의 내장함수 getState(), .dispach(), .subscribe()
//getState()는 스토어에 등록된 상태 정보 반환!