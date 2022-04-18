// Tab Components
export const Tab = ({ children, identifier, setCurrentTab, currentTab }) => {
  const handleTab = () => {
    setCurrentTab(identifier);
  };
  return (
    <li
      onClick={handleTab}
      className={currentTab === identifier ? 'tab active' : '2tab'}
    >
      {children}
    </li>
  );
};

export const TabContent = ({ identifier, currentTab, children }) => {
  return (
    currentTab === identifier && <div className='tabContent'>{children}</div>
  );
};
