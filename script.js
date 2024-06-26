// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
    // Prompt the user for name, last name, and salary

    const collectEmployees = function() {
 

    const employees = [];
    let continueQ = true;
    var i = 0;
    
    while (continueQ) {
      const emName = prompt("Enter your name:");
      const emLastName = prompt("Enter your last name:");
      const salary = parseFloat(prompt("Enter your salary:"));
    
      //Employee Object
      const employee = {
          emName: emName,
          emLastName: emLastName,
          salary: salary
      };
      employees.push(employee);
      console.log(employees);

      continueQ = confirm('Add Another Employee?');
      
      
    } 
    return employees;
    
    };





// Collect employee data
// const collectEmployees = function() {
//   // TODO: Get user input to create and return an array of employee objects

// }

// Display the average salary
const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
    totalSalary = 0;
    for(i = 0; i < employees.length; i++) {
      const currentEmployee = employees[i];
      totalSalary += parseInt(currentEmployee.salary);
    }
    let avgSalary = totalSalary / employees.length;
    console.log(`Average Employee Salary is ${avgSalary}`);
    return avgSalary;
};
 
// .
// Select a random employee
const getRandomEmployee = function(employees) {
  let getRandomEmployee = Math.floor(Math.random() * employees.length);
  let randomEmployee = employees[getRandomEmployee].emName;
  console.log(employees[getRandomEmployee].emName);
  console.log(employees[getRandomEmployee].emLastName);
  console.log(`Our lucky employee is ${randomEmployee}`);
  return employees[getRandomEmployee];
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employees) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employees.length; i++) {
    const currentEmployee = employees[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.emName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.emLastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.emLastName < b.emLastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
