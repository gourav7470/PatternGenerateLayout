
function Rectangle(patternSize){
  let outputString = ""
  for(let i=0; i<patternSize; i++){
      for(let j=0; j<patternSize; j++){
          outputString += "*"
      }
      outputString += "\n"
  }
  return outputString
}
function Flag(patternSize){
  let outputString = ""
  for(let i=0; i<patternSize; i++){
      for(let j=0; j<patternSize - i; j++){
          outputString += "*"
      }
      outputString += "\n"
  }
  return outputString
}
function Hollowrectangle(patternSize){
  let outputString = ""
  for(let i=1; i<=patternSize; i++){
      for(let j=1; j<=patternSize; j++){
        if(i == 1 || j == 1 || i ==      patternSize || j == patternSize){
        outputString += "*"
      }else{

        outputString += " "
      }
    }
   return outputString
}
}
function Pattern(){

  if(patternSelect.value == "rectangle"){
      output.value = Rectangle(patternSize.value)
  }
  if(patternSelect.value == "flag"){
      output.value = Flag(patternSize.value)
  }
  if(selectName.value == "hollowrectangle"){
      output.value = Hollowrectangle(patternSize.value)
  }
}
generate_btn.onclick = Pattern
