export const isFilledObject = (obj) => {
  return Object.keys(obj).length !== 0;
};

export const isFilledArray = (arr) => {
  return arr.length !== 0;
};

export const generarId = () => {
  const date = Date.now().toString(18);
  const math = Math.random().toString(18).substring(2);

  return date + math;
};

export const formatDate = (date) => {
  // const newDate = new Date(fecha);
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // return newDate.toLocaleDateString("es-CO", options);
  var dayOfWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    monthName = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    utc = date.getTime() + date.getTimezoneOffset() * 60000,
    US_time = utc + 3600000 * -4,
    US_date = new Date(US_time);

  return (
    dayOfWeek[US_date.getDay() - 1] +
    ", " +
    US_date.getDate() +
    " de " +
    monthName[US_date.getMonth()] +
    " de " +
    US_date.getFullYear()
  );
};
