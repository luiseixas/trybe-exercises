//Exercício I

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: employeeGenerator('Pedro Guerra'),
      id2: employeeGenerator('Luiza Drumond'),
      id3: employeeGenerator('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

  //Exercício II

  const generateRandomNumber = () => {
      
  }

  //

  const pessoas = [ 
    { nome: 'Luís', age: 28 },
    { nome: 'Stephanie', age: 29 },
    { nome: 'Emanuela', age: 21},
    { nome: 'Francineide', age: 46}
  ]


  const names = pessoas.map(value => value.nome );

  console.log(names);