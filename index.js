let userForm = document.getElementById("UF");


const retrieveEntries =() =>{
    let entries = localStorage.getItem("user_entries");

    if(entries){
        entries = JSON.parse(entries);
    }else{
        entries = [];
    }
    return entries;
}



let userEntries= retrieveEntries();

const displayEntries = () =>{
    const entries = retrieveEntries();

   const tableEntries = entries.map((entry)=>{
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`
        const acceptTermsCell = `<td class='border px-4 py-2'>${entry.AgreeTerms}</td>`
        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`
        return row;
}).join("\n");

const table =`<table class='table-auto w-full'>
    <tr>
    <th class='px-4 py-2 '>name </th>
    <th class='px-4 py-2 '>email </th>
    <th class='px-4 py-2 '>Password </th>
    <th class='px-4 py-2 '>Dob </th>
    <th class='px-4 py-2 '>Accepted Terms?</th>
    </tr>${tableEntries}
</table>`;

let details = document.getElementById("user_entries");
details.innerHTML = table;

}


const saveuserForm = (event) =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;

    const AgreeTerms = document.getElementById("AgreeTerms").checked;

    var currentYear = new Date().getFullYear();
var birthYear = dob.split("-");
let year=birthYear[0]
var age = currentYear-year
console.log({age,currentYear,birthYear});
    if(age < 18 || age > 55){
    document.getElementById('dob').style='border:1px solid red'
  return  alert("Age must be between 18 and 55")

}else{
    document.getElementById('dob').style='border:none'}

    const entry ={
        name,
        email,
        password,
        dob,
        AgreeTerms,
    };
    userEntries.push(entry);

    localStorage.setItem("user_entries", JSON.stringify(userEntries));
    displayEntries();
}
userForm.addEventListener("submit",saveuserForm);
displayEntries();
