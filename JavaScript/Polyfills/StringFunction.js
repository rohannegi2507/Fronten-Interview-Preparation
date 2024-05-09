// split
// Test cases : 
// ''  0 char
// ' ' 'a'  1 char
// 'sdasdasd'   multipleChar

function split(str, delimiter){
    let res = []
    let ele=''
    if(delimiter === '') return Array.from(str)
    
    const starSplit = (str)=>{
     if(!str) return
     const delimiterIndex = str.indexOf(delimiter)
     if(delimiterIndex >=0){
        res.push(str.substring(0,delimiterIndex))
        starSplit(str.substring(delimiterIndex+delimiter.length))
     }  else{
        res.push(str)
     }
    }

    starSplit(str,0)
    return res
}

console.log(split('rohan the negi the test the ria', 'the'))