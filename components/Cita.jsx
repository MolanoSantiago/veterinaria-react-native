import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { formatDate } from "../utils/functions";

const Cita = ({ item }) => {
  const { mascota, acompañante, email, telefono, sintomas, fecha } = item;
  console.log(item)
  return (
    <>
      <View>
        <Text>{mascota}</Text>
        <Text>{acompañante}</Text>
        <Text>{email}</Text>
        <Text>{telefono}</Text>
        <Text>{sintomas}</Text>
        <Text>{formatDate(fecha)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

})

export default Cita;
