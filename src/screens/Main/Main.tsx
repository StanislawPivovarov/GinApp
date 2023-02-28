import React from 'react'
import { ScrollView } from 'react-native'
import { global } from '../../../styles'
import Header from '../../components/Header'
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom'

const Main = () => {
    return(
        <ScrollView style={global.screen}>
            {/* <Header name='Главная'/> */}
        </ScrollView>
    )
}

export default Main;