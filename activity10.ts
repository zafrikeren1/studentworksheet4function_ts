console.log("Laporan Nilai Siswa")

const score1 = prompt('Masukkan nilai pertama siswa anda')
const score2 = prompt('Masukkan nilai kedua siswa anda')
const score3 = prompt('Masukkan nilai ketiga siswa anda')

const namaSiswa = prompt("Masukkan nama siswa anda") ?? "";

function CalculateAverage(score1: number, score2: number, score3: number): number{
    return (score1 + score2 + score3) / 3
}

function DetermineGrade(average: number): string {
    if (average >= 90){
        return "A Score";
    } else if (average >= 80) {
        return "B Score";
    } else if (average >= 70){
        return "C Score";
    } else if (average >= 60) {
        return "D Score";
    } else {
        return "F Score";
    }
}

function PrintReport (name: string, average: number, grade: string): void{
    console.log(`${name} | Average: ${average.toFixed(2)} | Score: ${grade}`)
}

const average = CalculateAverage(Number(score1), Number(score2), Number(score3));

const grade = DetermineGrade(average)

PrintReport(namaSiswa, average, grade)