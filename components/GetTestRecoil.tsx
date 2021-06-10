import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoAtomState } from '../atom';

const GetTestRecoil: React.FC = () => {
  const todo = useRecoilValue<string>(todoAtomState);

  return (
    <div>
      <span style={{ display: 'block' }}>{todo}</span>
    </div>
  );
};

export default GetTestRecoil;
