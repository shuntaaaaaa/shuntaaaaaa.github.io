function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight) {
    document.getElementById('result').textContent = "身長と体重を正しく入力してください。";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "低体重（やせ）";
  } else if (bmi < 25) {
    category = "普通体重";
  } else if (bmi < 30) {
    category = "肥満（1度）";
  } else {
    category = "高度肥満";
  }

  document.getElementById('result').textContent = `あなたのBMIは ${bmi.toFixed(1)} で、分類は「${category}」です。`;
}
