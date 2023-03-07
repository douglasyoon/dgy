import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import AppRoutes from './Routes';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </RecoilRoot>
);
