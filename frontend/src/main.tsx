import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router/Router.tsx";
import { RecoilRoot, useRecoilState } from 'recoil';
import { ThemeProvider } from '@emotion/react';

import { ThemeFlag, themeState } from './model/ThemeFlag.tsx'
import { lightTheme, darkTheme } from './theme/Theme.tsx'

function App() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const theme = currentTheme === ThemeFlag.light ? lightTheme : darkTheme;

  return (
      <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

export default App