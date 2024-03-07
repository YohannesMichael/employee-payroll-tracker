// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let addEmployee = true;
  // while loop to keep adding employees 
  while (addEmployee) {
    // grabbing employee details
    let firstName = prompt("First Name:");
    let lastName = prompt("Last Name:");
    let salary = parseFloat(prompt("Enter Salary:"));

    // Checking if salary is entered as a number
    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = parseFloat(salary);
    }

    // add employee data to array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    })

    // asking user if they would like to add another employee
    if (!confirm("Would you like to add another employee?")) {
      addEmployee = false;
    }
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // reduce function takes two inputs: accumulator, currentValue and returns a single number in this case
  const totalSalaries = employeesArray.reduce((sum, employee) => sum + employee.salary, 0)
  const averageSalary = totalSalaries / employeesArray.length;
  // const salariesArray = emplArray.map(employee => employee.salary);
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // creating a random index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // picking the random employee
  const randomEmployee = employeesArray[randomIndex];
  // print the random employees first name and last name
  console.log(`The Random Employee is: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
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
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
