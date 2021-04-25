import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";

import { SIZES, COLORS, FONTS, icons } from "../constants";
import { toggleTheme } from "../stores/themeActions";

const HeaderBar = ({ appTheme, toggleTheme }) => {
  const toggleThemeHandler = () => {
    if (appTheme.name === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  };

  return (
    <SafeAreaView
      style={{
        height: 150,
        width: "100%",
        backgroundColor: COLORS.purple,
        flexDirection: "row",
        paddingTop: 15,
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
        onPress={() => toggleThemeHandler()}
      >
        {/* SUN  */}
        <View
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            ...(appTheme.name === "light" ? styles.selectedLightModeStyle : {}),
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
            ...(appTheme.name === "dark" ? styles.selectedNightModeStyle : {}),
          }}
        >
          <Image
            source={icons.night}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  appTheme: state.appTheme,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (themeType) => dispatch(toggleTheme(themeType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

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
