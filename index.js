const inputBtn = document.getElementById("input-btn");
const delBtn=document.getElementById("delete-btn")
let myLeads = [];

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
localStorage.getItem("Myleads")

// get the leads from localstorage
leadsFromStorage=JSON.parse(localStorage.getItem("Leads"))
console.log(leadsFromStorage)

if(leadsFromStorage){
  myLeads=leadsFromStorage
  renderLeads()
}



inputBtn.addEventListener("click", function () {
  
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = ""; // clear out the input field
    myLeads=JSON.stringify(myLeads)  // to convert the javascript object into string as local storage only stores string values
    localStorage.setItem("Leads",myLeads) // save the myLeads to local storage
    myLeads=JSON.parse(myLeads)
  
  
});


delBtn.addEventListener("click",function(){
  myLeads=[]
  localStorage.clear()
  renderLeads()
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li class="list-group-item">
    ${myLeads[i]}
    </li>`;
  }
  ulEl.innerHTML = listItems;
}




