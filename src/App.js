import logo from './logo.svg';
import './App.css';
import { router } from './Routes/router'
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
    <div className="min-h-screen" data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;



// backend deploy server
// https://study-plan-backend.vercel.app/
// https://study-plan-backend.vercel.app/courses
// https://study-plan-backend.vercel.app/courses/_id