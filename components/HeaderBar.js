import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SIZES, COLORS, FONTS, icons } from "../constants";

const HeaderBar = (props) => {
  return (
    <SafeAreaView
      style={{
        height: 150,
        width: "100%",
        backgroundColor: COLORS.purple,
        flexDirection: "row",
      }}
    >
      {/* Greeting  */}
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Arup,</Text>
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome Back!</Text>
      </View>

      {/* Toggle Button  */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginHorizontal: SIZES.padding,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.lightPurple,
        }}
      >
        {/* SUN  */}
        <View
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.sunny}
            style={{ height: 30, width: 30, tintColor: COLORS.white }}
          />
        </View>

        {/* MOON  */}
        <View
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.night}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
              ...styles.selectedNightModeStyle,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});
