function quickSort(arr) {
	sort(0, arr.length - 1);
	return arr;

	function sort(start, end) {
		var key = arr[start];
		var i = start;
		var j = end;

		if (end - start > 0) {
			while(i < j) {
				for(;i < j;j--) {
					if(arr[j] < key){
						arr[i++] = arr[j];
						break;
					}
				}
				
				for(;i < j;i++) {
					if(arr[i]> key){
						arr[j--] = arr[i];
						break;
					}
				}
			}

			arr[i] = key;
			sort(0, i - 1);
			sort(i + 1, end);
		}
	}
}
