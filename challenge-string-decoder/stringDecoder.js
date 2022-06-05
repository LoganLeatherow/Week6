const decoder = string => {
    let splitStr = string.split('')
    let decoded = ""
    for(let i = 0; i<splitStr.length; i++){
        if (!isNaN(+splitStr[i])) {
            i += +splitStr[i]
        } else {
            decoded += splitStr[i]
        }
    }
    console.log(decoded)
    return decoded
}
console.log(decoder("0h2xce5ngbrdy"))





// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'


// const decoder = code => {
//     let splitStr = code.split('')
//     let result = ''
  
//     for (let i = 0; i < splitStr.length; i++) {
//       if (!isNaN(+splitStr[i])) {
//         i += +splitStr[i]
//       } else {
//         result += splitStr[i]
//       }
//     }
  
//     return result
//   }


