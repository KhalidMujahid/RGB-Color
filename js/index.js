const colorChanger = () => {
  const red = document.querySelector("#red").value;
  const blue = document.querySelector("#blue").value;
  const green = document.querySelector("#green").value;
  
  const styles = 'rgb('+ red  + ' , ' + green + ' , ' + blue + ')';
  
  document.body.style.backgroundColor = styles;
  document.querySelector("#result").value = styles;
}

document.querySelector("#red").addEventListener("input", colorChanger);
document.querySelector("#blue").addEventListener("input", colorChanger);
document.querySelector("#green").addEventListener("input", colorChanger);