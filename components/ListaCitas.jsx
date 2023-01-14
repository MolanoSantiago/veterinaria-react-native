import useMascota from "../hooks/useMascota";
import { isFilledArray } from "../utils/functions";
import { Text, StyleSheet, FlatList } from "react-native";
import Cita from "./Cita";

const ListaCitas = () => {
  const { citas } = useMascota();
  return (
    <>
      {isFilledArray(citas) ? (
        <>
          <FlatList
            style={styles.listado}
            data={citas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <Cita item={item} />
              );
            }}
          />
        </>
      ) : (
        <>
          <Text style={styles.noneCitas}>Aún no hay citas</Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noneCitas: {
    marginTop: 250,
    marginVertical: 30,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  listado: {
    marginTop: 40,
    marginHorizontal: 30,
  },
});

export default ListaCitas;
