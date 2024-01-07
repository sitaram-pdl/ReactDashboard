import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouting from './lib/PrivateRouting';
import { sidebarMenu } from './lib/SideBarmanu';
import Dashboard from './pages/Dashboard';
import { TooltipProvider } from './components/ui/tooltip';

const App = () => {
  return (
    <TooltipProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRouting />}>
            <Route path='/' element={<Dashboard />} />
            {sidebarMenu.map((item, i) => {
              if (item.subMenu) {
                return item.subMenu.map((subMenuItem, key) => (
                  <Route
                    key={key}
                    path={subMenuItem.text}
                    element={<Dashboard />}
                  />
                ));
              }
              return <Route key={i} path={item.text} element={<Dashboard />} />;
            })}
          </Route>
        </Routes>
      </Router>
    </TooltipProvider>
  );
};

export default App;
