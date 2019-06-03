import React from 'react';

const Tab = props => {
  const activeTab = (props.tab === props.selectedTab ? 'tab active-tab' : 'tab');

  return (
    <div
      className={activeTab}
      onClick={() => {
       props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
