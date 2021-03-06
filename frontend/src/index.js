import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import WelcomePage from './routes/welcome';
import LoginPage from './routes/login';
import CategoryPage from './routes/category';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='welcome' element={<WelcomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='category' element={<CategoryPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
