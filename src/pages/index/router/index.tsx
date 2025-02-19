import type { FC, ReactNode } from 'react';
import { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';

import Root from '@/pages/index/views/Root';

const LazyLoad = (Component: FC): ReactNode => {
  return (
    <Suspense fallback={<div className="route-loading">loading</div>}>
      <Component />
    </Suspense>
  );
};

export const globalRouter = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'allLive',
        element: LazyLoad(lazy(() => import('@/pages/index/views/LiveList'))),
      },
      {
        path: 'allClass',
        element: LazyLoad(lazy(() => import('@/pages/index/views/AllClass'))),
      },
    ],
  },
]);
