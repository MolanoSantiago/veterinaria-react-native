import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaCitas from "./components/ListaCitas";
import { MascotaProvider } from "./context/MascotaProvider";

export default function App() {
  return (
    <MascotaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <ListaCitas />
        <Formulario />
        <StatusBar style="auto" />
      </SafeAreaView>
    </MascotaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
});
