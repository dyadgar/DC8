function bubbleSort(array){
	let finish= false;
	while(!finish){
		finish = true;
		for(let i=0; i<array.length; i++){
			if(array[i+1]>array[i]){
				finish= false;
				let temp= array[i+1];
				array [i+1]=array[i];
				array[i]=temp;

			}

		}



	}
	return array;
}

let numbers= [5,0,9,1,7,4,2,6,3,8];
bubbleSort(numbers);
alert(numbers);

// let numbers= [5,0,9,1,7,4,2,6,3,8];

// numbers.sort().reverse();

// console.log(numbers);



