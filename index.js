function hasTargetSum(array, target) {
	// Write your algorithm here
	const seenNumbers = {};
	for (const number of array){
	const complement = target - number;
	if (complement in seenNumbers) return true;
	seenNumbers[number] = true;
	}
	return false;
	}
	
	/*
	Write the Big O time complexity of your function here
  the time complexity of the function is O(n)
	*/
	
	/*
	Add your pseudocode here
  1. Loop through the array
  2. Computes the complement of target - number
  3. Look for complement in seenNumbers 
	*/
	
	/*
	Add written explanation of your solution here
	*/
	
	// You can run `node index.js` to view these console logs
	if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
	
	console.log("");
	
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
	
	console.log("");
	
	console.log("Expecting: false");
	console.log("=>", hasTargetSum([1, 2, 5], 4));
	}
	
	module.exports = hasTargetSum;