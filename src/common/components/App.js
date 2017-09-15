import React from 'react';


export default ({children}) => {
  return (
    <div className={children.props.route.component.displayName} id="container">
      {children}       
    </div>
  );
}
