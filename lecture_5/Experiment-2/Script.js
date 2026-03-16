let employees=[]

function addEmployee() {
    let name = document.getElementById("name").value;   // lowercase 'value'
    let empid = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || empid === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }

    let emp_data = {
        name: name,
        id: empid,   // consistent naming
        salary: salary,
        department: dept
    };

    employees.push(emp_data);
    alert("Employee Added Successfully");  // ✅ This will now run

    // Clear fields
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}



function displayEmployee(){
    let output="<h3> All Employees </h3> <br>";
    employees.array.forEach((emp) => {
        output += `
        Name: ${emp.name} |
        ID: ${emp.empid}|
        Salary: Rs ${emp.salary}|
        Dept: ${emp.department} <br>
        `
    });
}

function filterSalary(){
    let filtered= employees.filter((emp)=>
    emp.salary>50000);
    let output="<h2>Employees with salary 50000</h2>"
}

function totalSalary(){
        let total=employees.reduce((sum,emp)=>sum+emp.salary,0);
}

function averageSalary(){
    let total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    let average=total/employees[Salary].length
}

function countDept(){
    
}