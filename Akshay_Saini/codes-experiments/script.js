
function attachEventListeners(){
  let count =0
  document.getElementById("clickMe")
  .addEventListener("click", function click(){
    console.log("button clicked", ++count)
  })
}
attachEventListeners()