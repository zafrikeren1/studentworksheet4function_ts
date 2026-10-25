console.log("Mesin BMI");

const beratBadan = prompt("Masukkan berat badan Anda (dalam kg): ");
const tinggiBadan = prompt("Masukkan tinggi badan Anda (dalam meter): ");

function BMICategory(beratBadan: number, tinggiBadan: number): string {
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Gemuk";
    } else {
        return "Obesitas";
    }
}

const kategoriBMI = BMICategory(Number(beratBadan), Number(tinggiBadan));
console.log(`Kategori BMI Anda adalah: ${kategoriBMI}`);