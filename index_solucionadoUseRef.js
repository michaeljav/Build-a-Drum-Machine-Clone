
const {Component,useRef,useEffect,useState} = React;
const {render} =ReactDOM;


     function App() {
       const [number, setNumber] = useState(0);
       const numberRef = useRef(0);
       numberRef.current =number;

       console.log('App numberRef');
       console.log(numberRef);

       function b() {
         console.log('The number: ', number);
         console.log('The numberRef.current : ', numberRef.current);
       }

       function handleClick(){
        console.log("clickk");
         b();

        

         setTimeout(() => {
           console.log("SetTimeout");
          b();  
          console.log('numberRef');
          console.log(numberRef);      
        }, 15000);
          
        console.info('Voy a renderizar');
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











