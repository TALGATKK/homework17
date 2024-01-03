function Person(
  firstname,
  secondname,
  age,
  country,
  city,
  haveDriverLicence,
  email
) {
  this.name = firstname;
  this.secondname = secondname;
  this.age = age;
  this.country = country;
  this.city = city;
  this.haveDriverLicence = haveDriverLicence;
  this.email = email;
  this.welcome = function () {
    var myText = `Привет! Меня зовут ${this.secondname} ${this.name}. Мне ${this.age} лет. Моя родина ${this.country}, город ${this.city}. Водительские права: ${this.haveDriverLicence}. Адрес почтового ящика: ${this.email}`;
    console.log(myText);
    return myText;
  };
}

var myperson = new Person(
  "Талгат",
  "Курманов",
  "37",
  "Казахстан",
  "Астана",
  "Есть",
  "talgatkk@gmail.com"
);
console.log(myperson);
var myinfo = myperson.welcome();
document.getElementById("info").innerHTML = myperson.welcome();
