import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Icon } from "react-native-elements";

function AdminButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name="plus-circle"
          type="material-community"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 20,
  },
});

export default AdminButton;
