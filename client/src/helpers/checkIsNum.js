export function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && 
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }