import { useEffect, type FC } from 'react';

const LiveList: FC = () => {
  useEffect(() => {
    console.log('LiveList');
  }, []);
  return (
    <div>
      {Math.random()}
    </div>
  );
};

export default LiveList;
