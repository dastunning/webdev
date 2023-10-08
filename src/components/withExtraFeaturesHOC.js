import React from 'react';

// This is a Higher Order Component that adds extraordinary features
function withExtraFeaturesHOC(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log("Component with Extra Features Mounted!");
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default withExtraFeaturesHOC;