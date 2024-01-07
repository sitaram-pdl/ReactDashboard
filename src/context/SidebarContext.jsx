import React, { createContext, useContext, useState } from 'react';

// Create a context for sidebar state
export const SidebarContext = createContext();

// SidebarProvider component to wrap your app and manage the sidebar state
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
