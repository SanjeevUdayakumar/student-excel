import { isNumeric } from "../helpers/checkIsNum";

export const userNameCheck = function (studentName:string) {
  if(studentName == ''){
   return false;
  }
  if (studentName.length >= 3 && studentName.length <= 20) {
    return false;
  } else {
    return true;
    // return "Invalid input User Name must contain 3 - 20 characters";
  }
};

export const rollNumberCheck = function (rollNumber:number) {
  if (rollNumber >= 0 && rollNumber <= 9999) {
    return false;
  } else {
    return true;
    // return "Invalid input Roll number must within 1 - 9999";
  }
};

export const stuClassCheck = function (studClass:string ) {
  if(studClass == '') return false;
  // if( isNumeric(studClass) && studClass > 12) return true
    studClass +='';
  if (studClass.length >= 1 && studClass.length <= 3) {
    return false;
  } else {
    return true;
  }
};

export const heightCheck = function (height: number) {
  if (height >= 100 && height <= 230 || height == 0) {
    return false;
  } else {
    return true;
    // return "Invalid input height must be within 100 - 230";
  }
};

export const weightCheck = function (weight: number) {
  if (weight >= 30 && weight <= 100 || weight == 0) {
    return false;
  } else {
    return true;
    // return "Invalid input weight must be within 30 - 100";
  }
};
