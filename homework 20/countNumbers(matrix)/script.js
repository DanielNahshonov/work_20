function countNumbers(matrix) {
    // проверяем что все цифры 
    const isInvalid = matrix.some(row => row.some(val => typeof val !== 'number'));
    if (isInvalid) {
      throw new Error('Invalid matrix: All values must be numbers');
    }
  
    // заходим в каждую строку row и в каждой строке проверяем нам
    const counts = {};
    matrix.forEach(row => {
      row.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
        console.log(counts)
      });
    });
  
// конвектируем в список обьектов 
    const result = Object.entries(counts).map(([num, count]) => ({
      num: parseInt(num),
      count: count
    }));
  
    return result;
  }
  
  // пример 
  const matrix = [
    [1, 1, 2, 4, 1, 1, 7],
    [1, 1, 1, 2, 1, 1, 7],
    [7, 7, 1, 1, 1, 1, 1]
  ];
  
  console.log(countNumbers(matrix));
  