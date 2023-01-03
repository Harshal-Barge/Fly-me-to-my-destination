// This function returns minimum numbers of planes required to reach final destination
// It has array with no. of N airports as an parameter
function minimum_no_of_planes(airports){
    // N variable is total no. of airports 
    let N=airports.length
    // this to create an array of length N filled with -1 e.g.[-1,-1,-1,-1,-1].
    // each element of result array will represent the minimum no. of planes 
    // reqired from that element to end
    let result=new Array(N).fill(-1)
    // set the last element to 0 since its the final destination 
    result[N-1]=0
    // start iterating from last and find minimum planes required from that index and store the value in
    // result array by doing so you will get ans at first element of result array
    for(let i=N-2;i>=0;i--){
        let min=99999999
        for(let j=0;j<airports[i]+1;j++){
            // this is to ensure that value of j does not exceed beyond N
            if(j+i>=N){
                break
            }
            // this is to ensure that -1 is not selected as min since it will be impossible to reach end 
            // from that index
            if(result[j+i]<=min && result[j+i]>=0){
                min=result[j+i]
            }
        }
        // when min>N which is only possible when value of min is not changed from 99999999 which means
        // it is not possible to read end from that index so set value at that index to -1 else set it to 
        // min+1 (minimum no of planes required form that index)
        if(min>N){
            result[i]=-1
        }else{
        result[i]=min+1
        }
    }
    // return the final result at index 0 of result array
    return result[0]
}

airports=[2,1,2,3,1]
console.log(minimum_no_of_planes(airports));