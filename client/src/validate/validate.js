export const userNameCheck = function (studentName) {
    console.log(studentName);
  if (studentName.length >= 3 && studentName.length <= 20) {
    return false;
  } else {
    return 'Invalid input User Name must contain 3 - 20 characters';
  }
};

export const rollNumberCheck = function (rollNumber) {
  if (rollNumber >= 1 && rollNumber <= 9999) {
    return false;
  } else {
    return 'Invalid input Roll number must within 1 - 9999';  
}
};

export const stuClassCheck = function (studClass) {
  if (studClass.length >= 3 && studClass.length <= 20) {
    return false;
  } 
  else {
    return 'Invalid input class must of character 1 - 3';  
  }
};

export const heightCheck = function (height) {
  if (height >= 100 && height <= 230) {
    return false;
  } else {
    return 'Invalid input height must be within 100 - 230';
  }
};

export const weightCheck = function (weight) {
  if (weight >= 30 && weight <= 100) {
    return false;
  } else {
    return 'Invalid input weight must be within 30 - 100';
  }
};
