const baseurl = "https://jsonplaceholder.typicode.com"
const axios = require('axios');

/* 

Structure of POST/PUT/PATCH/DELETE
axios.post(URL, DATA)

Part	        Meaning
URL	            Where to send
DATA	        What to send
response.data	What server returns
status	        number codes

*/

axios.post(baseurl, {
  title: 'New Post',
  body: 'Post body',
  userId: 1
})
.then(res => console.log(res.data))
.catch(err => console.error(err));

axios.put(baseurl,{
  title: 'New Post',
  body: 'Post body',
  userId: 1
}).then(res => console.log(res)).catch(rej => console.log(rej))

axios.delete(`${baseurl}/1`,)
.then(res =>
console.log("deleted")).catch(error => console.log(error.message)
);


async function createPost(){
  try{
    const res = await axios.post(
      baseurl,
      {
        title: title.value,
        body: body.value,
        userId: 1
      }
    );
    alert("Created! ID: " + res.data.id);
  }catch(err){
    alert("Error!");

    if(res == 404){
      console.log("no data")
    }
    else if (res = 503){
      console.log("server not working")
    }
  }
}
