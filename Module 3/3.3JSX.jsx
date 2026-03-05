
// Common mistakes and Solutions

//1
function Display() {
    return (
        <>
        < h1 >Hello</h1 >
        <p>World</p>
        </>
    )
}

<>
//2
<img src="img.png" />

//3
<div className="box"></div>

//4
{/* {if(age>18){return "Yes";}} */}
{age>18?"Yes":"no"}

</>
//5
return
(
  <h1>Hello</h1>
);

//6
function Card() {}
<>
//7
const name = "abc";
<h1>{name}</h1>

//8
<label htmlFor="email"></label>

//9
<button onClick={sayHello}></button>

</>
//10
const name = "rahul"
return {name};

function Broken() {
  const title = "Welcome";
  return (
    <>
    <div className="container">
      <h1>{title}</h1>
      <p>Let's learn React</p>
      <img src="logo.png"></img>
    </div>
   
    <footer>Copyright 2023</footer>
    </> 
  );
}
