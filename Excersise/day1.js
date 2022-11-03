//Excersise 1
//Write a code to ﬁnd area of rectangle. (L = p * l)
let rectangleWidth = 6;
let rectangleLength = 7;

let rectangleArea = rectangleWidth * rectangleLength;
console.log(`Luas persegi panjang adalah ${rectangleArea}`);

//Excersise 2
//Write a code to ﬁnd perimeter of rectangle. (K = 2 * p + l)
let rectanglePerimeter = 2 * rectangleWidth + rectangleLength;
console.log(rectanglePerimeter);
console.log(`Keliling persegi panjang adalah ${rectanglePerimeter}`);

//Excersise 3
//Write a code to ﬁnd diameter, circumference and area of a circle.
const phi = 3.14;
let circleRadius = 7;

//Circle Diameter (d = r * 2)
let circleDiameter = circleRadius * 2;
console.log(`Diameter lingkaran adalah ${circleDiameter}`);

//Circle Circumference (K = 2 * 𝞹 * r)
console.log(circleCircumference);
let circleCircumference = 2 * phi * circleRadius;
console.log(`Keliling lingkaran adalah ${circleCircumference}`);

//Circle Area (L = 𝞹 * r² )
let circleArea = phi * Math.pow(circleRadius, 2);
console.log(circleArea);
console.log(`Luas lingkaran adalah ${circleArea}`);

//Excersise 4
//Write a code to ﬁnd angles of triangle if two angles are given. (a° + b° + c° = 180°)
let angleA = 85;
let angleB = 65;

let angleC = 180 - (angleA + angleB);
console.log(`Sudut segitiga adalah ${angleC}°`);

//Excersise 5
//Write a code to get difference between dates in days.
let date1 = new Date("2022/10/31");
let date2 = new Date("1993/02/27");
let timeDifference = Math.abs(date1.getTime() - date2.getTime()); //Mencari selisih hari dari kedua tanggal (dalam bentuk millisecond)
let daysDifference = timeDifference / (1000 * 3600 * 24); //Mengubah millisecond menjadi hari (1 detik=1000ms, 1 jam = 3600 dtk, 1 hari= 24 jam)
console.log(
  `Selisih hari dari ${date1} dan ${date2} adalah ${daysDifference} Hari`
);

//Excersise 6
//Write a code to convert days to years, months and days. Example : 400 days → 1 year, 1 month, 5 days (1 year : 365 days, 1 month : 30 days)
let days = 400;
let jumlahTahun = days / 365; //Mencari jumlah tahun
let tahun = Math.floor(jumlahTahun);
let jumlahBulan = (days % 365) / 30; //Mencari jumlah bulan
let bulan = Math.floor(jumlahBulan);
let jumlahMinggu = ((days % 365) % 30) / 7; //Mencari jumlah minggu
let minggu = Math.floor(jumlahMinggu);
let jumlahHari = ((days % 365) % 30) % 7; //Mencari jumlah hari

console.log(
  `${days} Hari adalah ${tahun} Tahun, ${bulan} Bulan, ${minggu} Minggu, ${jumlahHari} Hari`
);
