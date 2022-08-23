// https://calculator.swiftutors.com/volume-of-a-sphere-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeofSphereRadio = document.getElementById('volumeofSphereRadio');
const radiusoftheSphereRadio = document.getElementById('radiusoftheSphereRadio');

let volumeofSphere;
const PI = Math.PI;
let radiusoftheSphere = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

volumeofSphereRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the Sphere (cm)';
  radiusoftheSphere = v1;
  result.textContent = '';
});

radiusoftheSphereRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Sphere (cm³)';
  volumeofSphere = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeofSphereRadio.checked)
    result.textContent = `Volume of Sphere = ${computeVolumeofSphere().toFixed(5)} cm³`;

  else if(radiusoftheSphereRadio.checked)
    result.textContent = `Radius of the Sphere = ${computeRadiusoftheSphere().toFixed(5)} cm`;
})

// calculation

function computeVolumeofSphere() {
  return (4/3) * PI * Math.pow(Number(radiusoftheSphere.value), 3);
}

function computeRadiusoftheSphere() {
  return Math.pow((Number(volumeofSphere.value) * 3) / (4 * PI), 3);
}