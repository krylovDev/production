import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/ib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';
import './styles/index.scss';
import { Suspense } from 'react';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
