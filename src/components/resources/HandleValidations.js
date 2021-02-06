const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.name.length>=10 && data.name.length<=120)){
    isValid = false;
    newColorFormText.name = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
