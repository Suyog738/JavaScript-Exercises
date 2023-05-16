const data = [
  {
    name: "Suyog Acharya",
    age: 21,
    gender: "Male",
    address: "Itahari",
  },
  {
    name: "Sanjaya Rai",
    age: 19,
    gender: "Rather Not To Say",
    address: "Bhojpur",
  },
  {
    name: "pranish chaulagain",
    age: 21,
    gender: "Male",
    address: "Khanar",
  },
  {
    name: "Bijaya Mangrati",
    age: 20,
    gender: "Custom",
    address: "Bardibas",
  },
  {
    name: "Laxman Limbu",
    age: 24,
    gender: "Male",
    address: "Dharan",
  },
];

let table = `<table>
<thead>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Gender</th>
<th>Address</th>
</thead>`;
let i = 1;
data.forEach((s) => {
  table += `<tr>
        <td>${i++}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.gender}</td>
        <td>${s.address}</td>
        </tr>
    `;
});
table += ` </table>`;
// const app = document.getElementById("tab");
// app.innerHTML = table;
document.getElementById("tab").innerHTML = table;
