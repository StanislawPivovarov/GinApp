import { View, Text } from 'react-native'
import React from 'react'
import {head} from './styles'
import { Divider } from '@rneui/base';

interface HeadProps{
    name: string;
}

const Header = (props: HeadProps) => {
    return(
        <View style={head.header}>
            <Text style={head.text}>{props.name}</Text>
        </View>
    )
}

export default Header;