import { View } from 'react-native'
import React from 'react'
import { Divider } from 'antd-mobile';
import {head} from './styles'

interface HeadProps{
    name: string;
}

const Header = (props: HeadProps) => {
    return(
        <View style={head.header}>
            <h2 style={head.text}>{props.name}</h2>
            <Divider style={head.divider}/>
        </View>
    )
}

export default Header;