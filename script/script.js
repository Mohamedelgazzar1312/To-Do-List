var inputbox= document.getElementById("input-box")
var listcontainer = document.getElementById("listcontainer")

function addTask(){
    if(inputbox.value===''){
        alert("You must write something!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value='';
    storedata();
}

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
storedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storedata();
    }
});

function storedata(){
    localStorage.setItem("data",listcontainer.innerHTML)


}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}  
showTask();

function checkCompletion() {
    var tasks = listcontainer.getElementsByTagName("li");
    var allChecked = true;
    for (var i = 0; i < tasks.length; i++) {
      if (!tasks[i].classList.contains("checked")) {
        allChecked = false;
        break;
      }
    }
    if (allChecked) {
      showCongratulations();
    }
  }
  
  function showCongratulations() {
    var congratulations = document.getElementById("congratulations");
    congratulations.style.display = "block";
  }
  



