import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routerPaths } from './types';
import PromoVideo from './pages/PromoVideo';
import InputNumber from './pages/InputNumber.tsx';
import FinalInfo from './pages/FinalInfo/';

import './index.scss';

const router = createBrowserRouter([
  {
    path: routerPaths.MAIN,
    element: <PromoVideo />,
  },
  {
    path: routerPaths.INPUT_NUMBER,
    element: <InputNumber />,
  },
  {
    path: routerPaths.FINAL_INFO,
    element: <FinalInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
