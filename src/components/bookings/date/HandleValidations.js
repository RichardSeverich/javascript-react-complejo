const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.date.length===10)){
    isValid = false;
    newColorFormText.date = dangerText;
  }if(data.isRegistry && !(data.comments.length > 3 && data.comments.length < 90)){
    isValid = false;
    newColorFormText.comments = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
