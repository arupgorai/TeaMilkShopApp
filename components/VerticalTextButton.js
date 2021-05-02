import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import {
  SIZES,
  COLORS,
  FONTS,
  icons,
  constants,
  images,
  dummyData,
} from "../constants";

const VerticalTextButton = ({ containerStyle, label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        transform: [{ rotate: "-90deg" }],
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: selected ? COLORS.white : COLORS.lightGreen,
          ...FONTS.body2,
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default VerticalTextButton;
