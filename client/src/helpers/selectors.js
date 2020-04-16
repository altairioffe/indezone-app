
export function getAnsForQuestion(state, question){
  // this  function takes the state, finds the question and returns the ans 
}

// This function gets today date both as a JS Date object and string
export function getTodayDate(){

  const obj = new Date();
  const str = obj.toDateString()

  return {
    obj,
    str
  }

}