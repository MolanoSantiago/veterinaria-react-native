import { useContext } from "react";

import MascotaContext from "../context/MascotaProvider"

const useMascota = () => {
    return useContext(MascotaContext)
}

export default useMascota