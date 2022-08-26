

// const fetch = require('node-fetch');

// let url = 'http://localhost/;5000/task/addtaskdata';

// let options = {method: 'POST'};

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

var ServerURL="http://localhost:3000"
//to read all data
const getData=async(url)=>{
  try{  
  var response= await fetch(`${ServerURL}/${url}`)
  var result=await response.json()  
  return result;
  }
  catch(e)
  { console.log("Error ",e)
      return null
  }
}
//used when queries contain parameters
const postData = async (url, body) => {
    try {
      const response = await fetch(`${ServerURL}/${url}`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      return result;1
    } catch (e) {
      return null;
    }
  
  }
  
  
  
export {getData,postData,ServerURL}