const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.name.length>=5 && data.name.length<=120)){
    isValid = false;
    newColorFormText.name = dangerText;
  }
  if(!(data.priceHour >= 10)){
    isValid = false;
    newColorFormText.priceHour = dangerText;
  }
  if(!/^[0-9]+$/.test(data.priceHour)){
    isValid = false;
    newColorFormText.priceHour = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
