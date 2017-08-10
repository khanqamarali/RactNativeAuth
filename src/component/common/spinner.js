import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const spinner = () => {
    return (
        <ActivityIndicator size="large" />
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { spinner };