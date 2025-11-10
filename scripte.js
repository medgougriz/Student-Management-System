let fullname = document.getElementById('fullname')
let email = document.getElementById('email')
let score = document.getElementById('score')
let add = document.getElementById('add')
let UT = 'add'
let num;

let Database = []

// create
function create(){
    let student = {
        fullname:fullname.value,
        email:email.value,
        score:score.value,
    };
    if(fullname.value !== '' && email.value !== '' && score.value !==''){
        if(UT === 'add'){Database[Database.length] = student}
        else{
            Database[num] = student
            UT = 'update'
            document.getElementById('Add').innerHTML = 'Add'
        }
    }
    read()
    clean ()
}

// read
function read(){
    let table = ''
    for(let i=0; i<Database.length; i++){
        table +=  `<tr>
                    <td>${i+1}</td>
                    <td>${Database[i].fullname}</td>
                    <td>${Database[i].email}</td>
                    <td>${Database[i].score}</td>
                    <td><button onclick="update(${i})">Update</button></td>
                    <td><button onclick="deletee(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('tbody').innerHTML = table
}
// delete
function deletee(i){
Database.splice(i,1)
read()
}

// update
function update(i){
   fullname.value = Database[i].fullname
   email.value =  Database[i].email
   score.value = Database[i].score
   document.getElementById('Add').innerHTML = 'update'
   UT = 'update'
   num = i
}
// clean
function clean (){
    fullname.value = ''
    email.value = ''
    score.value = '' 
}