const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(data.year.length !== 4){
    isValid = false;
    newColorFormText.year = dangerText;
  }
  if(!/^[0-9]+$/.test(data.year)){
    isValid = false;
    newColorFormText.year = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
