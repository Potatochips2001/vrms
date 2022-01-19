
document.addEventListener('keydown', event => {
  if (event.key === 'Enter') calculate();
});


function convertTemp(temp, tempUnit)
{
  switch (tempUnit) {
    case 'c': {
      temp += 273.15;
      console.log(temp);
      break;
    }
    case 'f': {
      temp = ( temp - 32 ) * (5/9) + 273.15;
      break;
    }
    default: {
      //do nothing
      break;
    }
  }
  return temp;
}

//get Vrms velocity
function getVelocity(temp, tempUnit, mass, massUnit)
{
  const R = 8.3144598; //This is the molar gas constant
  temp = convertTemp(temp, tempUnit);
  if (massUnit === 'g') mass /= 1000;
  let velocity = ( ( 3 * R * temp ) / mass )**0.5;
  return velocity;
}

function calculate()
{
  let temp = Number(document.getElementById("temp").value);
  let mass = Number(document.getElementById("mass").value);
  let tempUnit = document.getElementById("temp-unit").value;
  let massUnit = document.getElementById("mass-unit").value;
  document.getElementById("result").textContent = `Velocity: ${getVelocity(temp, tempUnit, mass, massUnit)} m/s`;
  return 0;
}
