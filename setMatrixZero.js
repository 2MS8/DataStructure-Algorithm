// matrix = [[1,1,1],[1,0,0],[1,1,1]];


// let r=[],c=[];

// for(let i=0;i<matrix.length;i++){
// 	for(let j=0;j<matrix[i].length;j++){
// 		if(!matrix[i][j]){
// 			r.push(i);
// 			c.push(j);
// 		}
// 	}
// }

// for(let i=0;i<matrix.length;i++){
// 		if(r.includes(i)){
// 			for(let a=0;a<matrix[i].length;a++){
// 				matrix[a]=0
// 			}
// 		}

// 	for(let j=0;j<matrix[i].length;j++){
// 		if(c.includes(matrix[i][j])){
// 			matrix[i][j]=0
// 		}
// 	}
// }
// console.log(r,c,matrix)

//*************OPTIMAL APROACH*****************//

// let matrix=[[1,1,1,1],[1,0,1,1],[1,1,0,1],[0,1,1,1]];
let matrix=[[1,1,1],[1,0,1],[1,1,1]]

let c=matrix[0][0];

for(let i=0;i<matrix.length;i++){
	for(let j=0;j<matrix[0].length;j++){
		if(!matrix[i][j]){
           if(j==0){
           	c=0;
           }else{
           	matrix[i][0]=0;
           	matrix[0][j]=0;
           }

		}

	}
}
console.log(matrix,c)
// matrix[0][0]=1
// for(let i=matrix.length-1;i>=0;i--){
// 	for(let j=matrix[0].length-1;j>=0;j--){
// 		if(!j){
// 			if(!c){
// 			 matrix[i][j]=0
// 			} 
// 		}else{
//            if(!matrix[i][0] || !matrix[0][j]){
//            	matrix[i][j]=0
//            }
// 		}

// 	}
// }
for (let i = matrix.length - 1; i >= 0; i--) {
	for (let j = matrix[0].length - 1; j >= 0; j--) {
		if (!j) {
			if (!c) {
				matrix[i][j] = 0;
			}
		} else {
			if (!matrix[i][0] || !matrix[0][j]) {
				matrix[i][j] = 0;
			}
		}
	}
}

console.log(matrix)