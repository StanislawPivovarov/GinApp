import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import { global } from "../../../styles";
import { MainStyle } from "./style";
import Header from "../../components/Header";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperRef, Toast } from "antd-mobile";
import MainWidget from "../../components/MainWidget";

const Main = () => {
    //fetching data from API
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
          <div
            style={{ background: color, height: '100%' }}
            onClick={() => {
              Toast.show(`你点击了卡片 ${index + 1}`)
            }}
          >
            {index + 1}
          </div>
        </Swiper.Item>
      ))
      const ref = useRef<SwiperRef>(null)
  return (
    <View style={global.screen}>
      <Header name="Главная" />
      <ScrollView style={global.content} >
        <View style={MainStyle.header}>
            <MainWidget summ={10}/>
            <MainWidget summ={10}/>
        </View>
        <Swiper style={MainStyle.swiper} autoplay>{items}</Swiper>
      </ScrollView>
    </View>
  );
};

export default Main;
