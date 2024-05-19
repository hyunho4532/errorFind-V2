import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./router/Router.tsx";
import { RecoilRoot } from 'recoil';

function App() {

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