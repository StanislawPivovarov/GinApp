import { ScrollView } from 'react-native'
import CatalogIcon from '../../components/CatalogIcon';
//@ts-ignore
import React from 'react'
import { Col, Row, Grid } from "react-native-easy-grid";


const Catalog = () => {
    
    return(
        
        <ScrollView>
                <CatalogIcon title={"Черный чай"} icon='https://images.unsplash.com/photo-1627764611688-2d07255e995e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'/>
                <CatalogIcon title={"Зеленый чай"} icon='https://images.unsplash.com/photo-1622480916113-9000ac49b79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'/>
                <CatalogIcon title={"Кофе"} icon='https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'/>
                

            <CatalogIcon title={"Десерты"} icon='https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        </ScrollView>
    )
}

export default Catalog;