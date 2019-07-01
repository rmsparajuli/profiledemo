import React from 'react';
import {createAppContainer, createStackNavigator } from 'react-navigation'
import { Contact, Login, Signup } from '../screens'

const AllRouter = createStackNavigator({
    login:{ screen:Login },
    signup:{ screen:Signup},
    callapp:{ screen:Contact }
},
{
    initialRouteName:'login'
})

export default createAppContainer(AllRouter)
