import React from 'react'
import { ScrollView } from 'react-native'
import { global } from '../../../styles'
import Header from '../../components/Header'

const Main = () => {
    return(
        <ScrollView style={global.screen}>
            <Header name='Главная'/>
        </ScrollView>
    )
}

export default Main;