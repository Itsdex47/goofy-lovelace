import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'dashboard'
  const [domain, setDomain] = useState('example.com');

  // Handle URL hashes or back button behavior
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/dashboard') {
        setView('dashboard');
      } else {
        setView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToDashboard = (targetDomain) => {
    setDomain(targetDomain || 'example.com');
    window.location.hash = '#/dashboard';
    setView('dashboard');
  };

  const navigateToLanding = () => {
    window.location.hash = '';
    setView('landing');
  };

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onClaimDashboard={navigateToDashboard} />
      ) : (
        <Dashboard domain={domain} onGoBack={navigateToLanding} />
      )}
    </>
  );
}

export default App;
