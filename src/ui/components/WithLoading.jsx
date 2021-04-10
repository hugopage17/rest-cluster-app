import React from 'react';
import LoadingData from './LoadingData.jsx'

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return (<Component {...props} />);
    return (
      <div style={{position:'absolute', top:'15%', left:'10%'}}>
        <LoadingData/>
      </div>
    );
  }
}
export default WithLoading;