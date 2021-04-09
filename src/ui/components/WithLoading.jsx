import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return (<Component {...props} />);
    return (<p style={{color:'white',position:'absolute', top:'5%', left:'25%', textAlign:'center'}}>Loading History</p>);
  }
}
export default WithLoading;