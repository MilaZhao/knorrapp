
import { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Shop } from './components/Shop';
import { Profile } from './components/Profile';
import { Inspiration } from './components/Inspiration';
import { BottomNav } from './components/BottomNav';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'login' | 'onboarding' | 'dashboard' | 'shop' | 'profile' | 'inspiration' | 'rewards'>('login');
  
  // User State
  const [userSegment, setUserSegment] = useState<'quality' | 'efficiency'>('quality');
  const [userRole, setUserRole] = useState<'boss' | 'chef' | 'learner'>('boss');
  const [isGuest, setIsGuest] = useState(false);

  // Handlers
  const handleLogin = () => {
    setCurrentView('onboarding');
  };

  const handleGuest = () => {
    setIsGuest(true);
    setUserSegment('quality'); // Default view for guest
    setUserRole('learner');
    setCurrentView('dashboard');
  };

  const handleOnboardingComplete = (segment: 'quality' | 'efficiency', role: 'boss' | 'chef' | 'learner') => {
    setUserSegment(segment);
    setUserRole(role);
    setIsGuest(false);
    setCurrentView('dashboard');
  };

  const handleTabChange = (tab: string) => {
    setCurrentView(tab as any);
  };

  const handleLogout = () => {
    setCurrentView('login');
    setIsGuest(false);
    setUserSegment('quality');
  };

  const showBottomNav = ['dashboard', 'shop', 'profile', 'inspiration', 'rewards'].includes(currentView);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen relative max-w-md mx-auto shadow-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        
        {currentView === 'login' && (
          <motion.div key="login" exit={{ opacity: 0 }} className="h-full">
            <Login onLogin={handleLogin} onGuest={handleGuest} />
          </motion.div>
        )}
        
        {currentView === 'onboarding' && (
          <motion.div key="onboarding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
            <Onboarding onComplete={handleOnboardingComplete} />
          </motion.div>
        )}

        {currentView === 'dashboard' && (
           <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
             <Dashboard userSegment={userSegment} userRole={userRole} isGuest={isGuest} />
           </motion.div>
        )}

        {currentView === 'shop' && (
            <motion.div key="shop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <Shop />
            </motion.div>
        )}

        {currentView === 'profile' && (
            <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <Profile onLogout={handleLogout} />
            </motion.div>
        )}
        
        {currentView === 'inspiration' && (
            <motion.div key="inspiration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <Inspiration />
            </motion.div>
        )}

        {/* Placeholder for Rewards */}
        {currentView === 'rewards' && (
            <motion.div key="rewards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center bg-gray-50 pb-20">
                <div className="text-center p-8">
                    <h2 className="text-2xl font-bold text-gray-400 mb-2">功能開發中</h2>
                    <p className="text-gray-400">敬請期待</p>
                </div>
            </motion.div>
        )}

      </AnimatePresence>

      {showBottomNav && (
        <BottomNav currentTab={currentView} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
