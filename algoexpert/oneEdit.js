//MEDIUM:

//o(n) time o(n) space
function oneEdit(stringOne, stringTwo) {
  if (stringOne.length === 1 && stringTwo.length === 1) {
    return true;
  }
  //find out lengths and shorter vs longer
  let longer;
  let shorter;
  if (stringOne.length > stringTwo.length) {
    longer = stringOne;
    shorter = stringTwo;
  } else {
    longer = stringTwo;
    shorter = stringOne;
  }

  if (longer.length - shorter.length > 1) {
    return false;
  }

  if (shorter.length === 1 && longer.length === 2) {
    if (shorter[0] === longer[0] || shorter[0] === longer[1]) {
      return true;
    } else {
      return false;
    }
  }

  //if lengths === loop either chcekcing:
  let diffs = 0;
  if (longer.length === shorter.length) {
    for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== shorter[i]) {
        diffs += 1;
      }

      if (diffs > 1) {
        return false;
      }
    }
  }

  //if lengths differ by one loop sm checking
  if (longer.length - shorter.length === 1) {
    if (shorter[0] !== longer[0]) {
      for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] !== longer[i + 1]) {
          return false;
        }
      }
    } else if (shorter[shorter.length - 1] !== longer[longer.length - 1]) {
      for (let i = shorter.length - 1; i >= 0; i--) {
        if (shorter[i] !== longer[i - 1]) {
          return false;
        }
      }
    } else {
      diffs = 0;
      for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] !== longer[i]) {
          diffs += 1;
        }

        if (diffs > 1) {
          if (shorter[i] !== longer[i + 1]) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

//same time/space algo expert guided code:
function oneEdit(stringOne, stringTwo) {
  if (stringOne.length === 1 && stringTwo.length === 1) {
    return true;
  }

  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }

  //if lengths === loop either chcekcing:
  let diffs = 0;
  if (stringOne.length === stringTwo.length) {
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        diffs += 1;
      }

      if (diffs > 1) {
        return false;
      }
    }
  }

  //if lengths differ by one loop sm checking
  if (Math.abs(stringOne.length - stringTwo.length) === 1) {
    diffs = 0;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        if (
          stringOne.length > stringTwo.length &&
          stringOne.substring(i + 1) !== stringTwo.substring(i)
        ) {
          return false;
        }

        if (
          stringTwo.length > stringOne.length &&
          stringTwo.substring(i + 1) !== stringOne.substring(i)
        ) {
          return false;
        }
      }
    }
  }

  return true;
}

//o(n) time o(1) space:
function oneEdit(stringOne, stringTwo) {
  if (stringOne.length === 1 && stringTwo.length === 1) {
    return true;
  }

  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }

  //if lengths === loop either chcekcing:
  let diffs = 0;
  if (stringOne.length === stringTwo.length) {
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        diffs += 1;
      }

      if (diffs > 1) {
        return false;
      }
    }
  }

  //if lengths differ by one loop sm checking
  if (Math.abs(stringOne.length - stringTwo.length) === 1) {
    let started = false;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        started = true;
      }
      if (started) {
        if (
          stringOne.length > stringTwo.length &&
          stringOne[i + 1] !== stringTwo[i]
        ) {
          return false;
        }

        if (
          stringTwo.length > stringOne.length &&
          stringTwo[i + 1] !== stringOne[i]
        ) {
          return false;
        }
      }
    }
  }

  return true;
}
