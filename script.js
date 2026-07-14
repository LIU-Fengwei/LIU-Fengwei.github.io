const bmiForm = document.querySelector('#bmi-form');

if (bmiForm) {
  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');
  const heightError = document.querySelector('#height-error');
  const weightError = document.querySelector('#weight-error');
  const bmiValue = document.querySelector('#bmi-value');
  const bmiCategory = document.querySelector('#bmi-category');

  function categoryFor(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  bmiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    heightError.textContent = '';
    weightError.textContent = '';

    let valid = true;
    if (!height || height < 80 || height > 250) {
      heightError.textContent = 'Please enter a height between 80 and 250 cm.';
      valid = false;
    }
    if (!weight || weight < 20 || weight > 300) {
      weightError.textContent = 'Please enter a weight between 20 and 300 kg.';
      valid = false;
    }
    if (!valid) {
      bmiValue.textContent = '--';
      bmiCategory.textContent = 'Please check your input.';
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = `Category: ${categoryFor(bmi)}`;
  });

  bmiForm.addEventListener('reset', () => {
    heightError.textContent = '';
    weightError.textContent = '';
    bmiValue.textContent = '--';
    bmiCategory.textContent = 'Enter your information to begin.';
  });
}
