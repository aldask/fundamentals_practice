const comparison = (arg1, arg2) => {
    if (arg1 == arg2) {
        return arg1;
    }
  }

  console.log(comparison("5", 5));

  const comparison2 = (arg1, arg2) => {
    if (arg1 > arg2) {
        return true;
    } else return false;
  }

  console.log(comparison2("ABC", "abc"));