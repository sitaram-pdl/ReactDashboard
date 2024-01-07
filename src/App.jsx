// Import necessary modules from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivateRouting from './lib/PrivateRouting';
import { sidebarMenu } from './lib/SideBarmanu';
import Dashboard from './pages/Dashboard';
import { Tooltip, TooltipProvider } from './components/ui/tooltip';

// Create components for different pages

const About = () => <h1>About Page</h1>;

// App component using React Router v6
const App = () => {
  return (
    <TooltipProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRouting />}>
            <Route path='/' element={<Dashboard />} />
            {sidebarMenu.map((item, i) => (
              <Route key={i} path={item.text} element={<Dashboard />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </TooltipProvider>
  );
};

export default App;
