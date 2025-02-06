'use client';

import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition < 500) {
      setActiveTab(0);
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
      setActiveTab(1);
    } else if (scrollPosition >= 1000) {
      setActiveTab(2);
    }
  }, [scrollPosition]);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <div
          className={`tab ${activeTab === 0 ? 'text-red-500' : ''}`}
          style={{ marginBottom: '20px', cursor: 'pointer' }}
          onClick={() => setActiveTab(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'text-red-500' : ''}`}
          style={{ marginBottom: '20px', cursor: 'pointer' }}
          onClick={() => setActiveTab(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'text-red-500' : ''}`}
          style={{ marginBottom: '20px', cursor: 'pointer' }}
          onClick={() => setActiveTab(2)}
        >
          Tab 3
        </div>
      </div>
      <div style={{ marginLeft: '200px', width: '80%', paddingTop: '100px' }}>
        <div style={{ height: '1500px' }}>
          <div
            style={{
              display: activeTab === 0 ? 'block' : 'none',
              background: 'lightblue',
              height: '500px'
            }}
          >
            Block 1
          </div>
          <div
            style={{
              display: activeTab === 1 ? 'block' : 'none',
              background: 'lightgreen',
              height: '500px'
            }}
          >
            Block 2
          </div>
          <div
            style={{
              display: activeTab === 2 ? 'block' : 'none',
              background: 'lightcoral',
              height: '500px'
            }}
          >
            Block 3
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Sidebar;
