const getTotalBalanceByGender = (users, gender) => {
  return users.filter(i=> i.gender===gender).reduce((total, 
    user) => {
 return  total + user.balance; }, 0);

};


const allUsers1 = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(allUsers1, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers1, "female")); // 8863
