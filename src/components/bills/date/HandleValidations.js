const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.date.length===10)){
    isValid = false;
    newColorFormText.date = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
