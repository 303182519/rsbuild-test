import { useEffect, type FC } from 'react';

const AllClass: FC = () => {
  useEffect(() => {
    console.log('AllClass');
  }, []);
  return (
    <div>
      {Math.random()}
    </div>
  );
};

export default AllClass;
