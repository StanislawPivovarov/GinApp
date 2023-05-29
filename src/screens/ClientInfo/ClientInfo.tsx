import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text} from "react-native";
import { Info } from "./styles";
import { Button } from "@ant-design/react-native";

const ClientInfo = (navigation: any) => {

    const [selectedCity, setSelectedCity] = useState("Казань")
    return(
        <SafeAreaView>
            <View style={Info.wrapper}>
            <Text style={Info.infoHeader}>
                Информация
            </Text>
            <View style={Info.form}>
            <TextInput
            placeholder="Ваше имя"
            style={Info.input}
            />
            <View style={Info.adress}>
                <Text style={Info.disclaimer}>Работаем только по г. Казань</Text>
                <TextInput
                style={Info.input}
                placeholder="Ваш адрес полностью"
                />
            </View>
            <Button style={Info.saveButton}>
                Сохранить
            </Button>

            </View>
            
            </View>
        </SafeAreaView>
    )
}

export default ClientInfo;