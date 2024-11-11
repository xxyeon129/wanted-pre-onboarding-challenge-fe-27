import { RouterProvider } from 'react-router-dom';
import { AppRouter } from 'app/routers/router';

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
