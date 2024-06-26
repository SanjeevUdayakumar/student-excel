
export const userNameCheck = function (studentName:string):boolean {
  if(studentName == ''){
   return false;
  }
  if (studentName.length >= 3 && studentName.length <= 20) {
    return false;
  } else {
    return true;
  }
};

export const rollNumberCheck = function (rollNumber:number):boolean {
  if (rollNumber >= 0 && rollNumber <= 9999) {
    return false;
  } else {
    return true;
  }
};

export const stuClassCheck = function (studClass:string ):boolean {
  if(studClass == '') return false;
  if( parseInt(studClass) < 1 || parseInt(studClass) > 12) return true
    studClass +='';
  if (studClass.length >= 1 && studClass.length <= 3) {
    return false;
  } else {
    return true;
  }
};

export const heightCheck = function (height: number):boolean {
  if (height >= 100 && height <= 230 || height == 0) {
    return false;
  } else {
    return true;
  }
};

export const weightCheck = function (weight: number):boolean {
  if (weight >= 30 && weight <= 100 || weight == 0) {
    return false;
  } else {
    return true;
  }
};
