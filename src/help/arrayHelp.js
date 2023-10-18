export const getIndexByKeyValue = (array, key, value) => {
  const index = array.findIndex(element => element[key] === value);
  return index;
}

export const getElementsWithKeyValue = (array, key, value) => {
  const filteredArray = array.filter(element => element[key] === value);
  return filteredArray;
}

export const sortBy = (array, parameter, ascendingOrder = true) =>{
    return array.sort((a, b) => {
        if(ascendingOrder) return (a[parameter] > b[parameter]) ? -1 : 1
        return (a[parameter] > b[parameter]) ? 1 : -1
    });
}

export const getNFirstElementsOfArray = (array = [], numberOfElements) => {
    if(!numberOfElements) return array;
    return array.slice(0, numberOfElements);
}

export const getRandomElementsFromArray = (array, numberOfElements) => {
    const arrayLenght = array.length;
    if (numberOfElements <= 0) {
      numberOfElements = 1;
    }else if(numberOfElements > arrayLenght){
        numberOfElements = arrayLenght
    }
    const randomIndices = [];
    const randomElements = [];
    while (randomIndices.length < numberOfElements) {
      const randomIndex = Math.floor(Math.random() * arrayLenght);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
        randomElements.push(array[randomIndex]);
      }
    }
  
    return randomElements;
}