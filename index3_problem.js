
const {Component,useState} = React;
const {render} =ReactDOM;


     function App() {
       const [number, setNumber] = useState(0);

       function b() {
         console.log('The number: ', number);
       }

       function handleClick(){
        console.log("click");
         b();
        
         setTimeout(() => {
           console.log("SetTimeout");
          b();        
        }, 5000);

          setNumber(number + 1);
       }


       return(
         <>
         <button onClick={handleClick}>Hi! Try edit me, Michael</button>
         <p>The number {number}</p>
         </>
       )

     }



 render(<App/>,document.getElementById('root'));











