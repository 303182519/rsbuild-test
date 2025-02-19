
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { globalRouter } from '@/pages/index/router';

const App = () => {
  useEffect(() => {
    globalRouter.navigate({
      pathname: '/allLive',
    });
  }, []);

  return (
    <div className="index-wrap">
      <RouterProvider router={globalRouter} />
    </div>
  );
};

export default App;
