import React from 'react';
import { useSetRecoilState } from 'recoil';

import { todoAtomState } from '../atom';

const SetTestRecoil: React.FC = () => {
  const setTodo = useSetRecoilState<string>(todoAtomState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default SetTestRecoil;
