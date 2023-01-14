import { Pressable, Text, StyleSheet } from "react-native";
import useMascota from "../hooks/useMascota";

const Header = () => {
    const { setModal } = useMascota()
  return (
    <>
      <Text style={styles.title}>
        Administrador de Pacientes <Text style={styles.span}>Veterinaria</Text>
      </Text>

      <Pressable onPress={() => setModal(true)} style={styles.pressable}>
        <Text style={styles.pressableText}>Nueva cita</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "bold",
  },
  span: {
    color: "#2563EB",
  },
  pressable: {
    backgroundColor: "#2563EB",
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  pressableText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default Header;
