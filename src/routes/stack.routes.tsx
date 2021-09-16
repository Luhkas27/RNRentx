/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarDetails, Home, Scheduling, SchedulingDetailts, SchedulingComplete } from '@pages';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: string | undefined;
            CarDetails: string | undefined;
            Scheduling: string | undefined;
            SchedulingDetailts: string | undefined;
            SchedulingComplete: string | undefined;
        }
    }
}

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="CarDetails" component={CarDetails} />
            <Screen name="Scheduling" component={Scheduling} />
            <Screen name="SchedulingDetailts" component={SchedulingDetailts} />
            <Screen name="SchedulingComplete" component={SchedulingComplete} />
        </Navigator>
    );
};
