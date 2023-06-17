function findFrequency(str){
  let String =  str.toLowerCase()
  let temp ={

  }
  for(let i = 0 ; i< String.length ; i++){
    if(!temp[String[i]]){
        temp[String[i]] = 1
    }else{
        temp[String[i]]++
    }
  }
  
  let result = ''
  for (const key in temp) {
   result += `${key}${temp[key]} `
  }

  console.log(result);
}



findFrequency('vikashparida');