const handleValidations = (data, setColorFormText, colorFormReset) => {

  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if (!(data.clientNit.length>=4 && data.clientNit.length<=15)) {
    isValid = false;
    newColorFormText.nit = dangerText;
  } if(!(data.clientName.length>=3 && data.clientName.length<=30)) {
    isValid = false;
    newColorFormText.name = dangerText;
  } if(!/^[0-9]+$/.test(data.clientNit)){
    isValid = false;
    newColorFormText.nit = dangerText;
  }
  if(data.arrayBookings.length === 0){
    isValid = false;
    alert("no tiene detalle");
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
