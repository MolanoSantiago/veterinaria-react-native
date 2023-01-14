import { useState, createContext } from "react";
import { Alert } from "react-native";
import { generarId } from "../utils/functions";

const MascotaContext = createContext();

const MascotaProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [mascota, setMascota] = useState("");
  const [acompañante, setAcompañante] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [citas, setCitas] = useState([]);

  const handlerNuevaCita = () => {
    const nuevaCita = {
      id: generarId(),
      mascota,
      acompañante,
      email,
      telefono,
      sintomas,
      fecha,
    };

    if ([mascota, acompañante, email, telefono, sintomas, fecha].includes("")) {
      Alert.alert("¡Cuidado!", "Todos los campos son requeridos.");
    } else {
      setCitas([...citas, nuevaCita]);
      setModal(false)
      setMascota("")
      setAcompañante("")
      setEmail("")
      setTelefono("")
      setSintomas("")
      setFecha(new Date())
    }
  };

  return (
    <MascotaContext.Provider
      value={{
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
        handlerNuevaCita,
        citas,
        setCitas,
      }}
    >
      {children}
    </MascotaContext.Provider>
  );
};

export { MascotaProvider };

export default MascotaContext;
