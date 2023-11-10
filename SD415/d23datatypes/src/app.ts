
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);


}

/**
 * 
 * @param {*} str 
 */
export function checkSpam(str: string, keywords: string[]): boolean {
  const Str1 = str.toLowerCase();

  for (const keyword of keywords) {
    if (Str1.includes(keyword)) {
      return true;
    }
  }

  return false;
}

/**
 * 
 * @param {*} str 
 * @param {*} maxlength 
 */
export function truncate(str: string, maxlength: number) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr: number[]) {

  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}




export function camelize(str: string) {

  return str.charAt(0).toUpperCase() + str.slice(1);
}
camelize;

export function extractCurrencyValue(str: string) {

  return Number(str.replace(/\D/g, ''));

}

