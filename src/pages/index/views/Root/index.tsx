import { type FC } from 'react';
import { Outlet } from 'react-router-dom';


const Root: FC = () => {
  return (
    <div className="app-container">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
