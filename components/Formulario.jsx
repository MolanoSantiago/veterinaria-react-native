import useMascota from "../hooks/useMascota";
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useEffect } from "react";
import { formatDate } from "../utils/functions";

const Formulario = () => {
  const {
    modal,
    setModal,
    mascota,
    setMascota,
    acompañante,
    setAcompañante,
    email,
    setEmail,
    telefono,
    setTelefono,
    sintomas,
    setSintomas,
    fecha,
    setFecha,
    handlerNuevaCita
  } = useMascota();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setFecha(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: fecha,
      onChange,
      mode: currentMode
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };
  
  return (
    <>
      <Modal animationType="slide" visible={modal}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>
              Nueva <Text style={styles.titleBold}>Cita</Text>
            </Text>

            <Pressable style={styles.btnCancel} onPress={() => setModal(false)}>
              <Text style={styles.btnCancelText}>x Cancelar</Text>
            </Pressable>

            <View style={styles.campo}>
              <Text style={styles.label}>Nombre Paciente:</Text>
              <TextInput
                placeholder="Nombre del paciente"
                placeholderTextColor="#666"
                style={styles.input}
                value={mascota}
                onChangeText={setMascota}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Nombre Acompañante:</Text>
              <TextInput
                placeholder="Nombre del acompañante"
                placeholderTextColor="#666"
                style={styles.input}
                value={acompañante}
                onChangeText={setAcompañante}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Email Acompañante:</Text>
              <TextInput
                placeholder="Correo electrónico del acompañante"
                placeholderTextColor="#666"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Telefono Acompañante:</Text>
              <TextInput
                placeholder="Número de telefono del acompañante"
                placeholderTextColor="#666"
                style={styles.input}
                keyboardType="number-pad"
                value={telefono}
                onChangeText={setTelefono}
                maxLength={10}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Síntomas:</Text>
              <TextInput
                placeholder="Síntomas del paciente"
                placeholderTextColor="#666"
                style={[styles.input, styles.sintomasInput]}
                value={sintomas}
                onChangeText={setSintomas}
                multiline={true}
                numberOfLines={4}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Fecha de cita:</Text>
              <Pressable onPress={() => showDatepicker()}>
                <Text style={styles.input}>{formatDate(fecha)}</Text>
              </Pressable>
            </View>

            <Pressable
              style={styles.btnAgendar}
              onPress={() => handlerNuevaCita()}
            >
              <Text style={styles.btnAgendarText}>Agendar</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2563EB",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 30,
    color: "#FFF",
  },
  titleBold: {
    fontWeight: "bold",
    color: "#F3F4F6",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "600",
  },
  campo: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  sintomasInput: {
    height: 100,
    textAlign: "left",
  },
  btnCancel: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#0f285e",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eb2563",
  },
  btnCancelText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
    textTransform: "uppercase",
  },
  btnAgendar: {
    marginVertical: 50,
    backgroundColor: "#0f285e",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#63eb25",
  },
  btnAgendarText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "800",
    fontSize: 15,
    textTransform: "uppercase",
  },
});

export default Formulario;
