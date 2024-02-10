function Display(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
  }



  // Dark and Light mode 

  function darkMode() { 

    let body = document.body;
    let cal = document.querySelector(".calculator");
    body.style.backgroundColor = "black";
    cal.style.backgroundColor = "white";

    const nodeList = document.querySelectorAll(".button1");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "white";
  nodeList[i].style.color = "black";
 }
    
  }

  function lightMode() {
    
    let body = document.body;
    let cal = document.querySelector(".calculator");
    body.style.backgroundColor = "white";
    cal.style.backgroundColor = "black";

    const nodeList = document.querySelectorAll(".button1");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "black";
  nodeList[i].style.color = "white";
  }
}