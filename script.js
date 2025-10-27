function firstNonRepeatedChar(str) {
 // Write your code here
	const newstr = new Map();
	for (let  char of str) {
		newstr.set(char, (newstr.get(char)||0)+1);
	}
	for(let char of str){
		if(newstr.get(char) ===1){
			return char;
		}
	}
	return null;
	
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
