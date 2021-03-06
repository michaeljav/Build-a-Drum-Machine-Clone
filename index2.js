// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

const {Component,useState} = React;
const {render} =ReactDOM;


const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }
];



const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  height: 77,
  marginTop: 13
};

const inactiveStyle = {
  backgroundColor: 'grey',
  marginTop: 10,
  boxShadow: '3px 3px 5px black'
}
const Drumpkey = (props) => {

  const [padStyleState,setPadStyleState] = React.useState(inactiveStyle); 

 
 

const activeDrumpkey = () =>  {
  console.log('Entered activeDrumpkey');
  console.log('padStyleState.backgroundColor' );
  console.log(padStyleState.backgroundColor );
 if (padStyleState.backgroundColor === 'orange') {
   console.log('Entered Orange');
   setPadStyleState(inactiveStyle);
  //  console.warn(inactiveStyle);
 }else {
   console.log('NOT Entered Orange');
    // setPadStyleState({...activeStyle}); 
    setPadStyleState(activeStyle);
    console.log('Value state:');  
    console.log(padStyleState);
 }
}


const playSound = () => {
  
  const sound =  document.getElementById(props.keyName);
  //set time in second in 0 for begin from the start
  sound.currentTime = 0;
  sound.play();
  //active color of press
  // activeDrumpkey();
  activeDrumpkey() 
  // setTimeout(() => {
  //   console.log("EXECUTING  SET TIMEOUT ");
  //   console.log(padStyleState);
  //   activeDrumpkey() 
  // },5000);
  //   setTimeout(() => {
  //     console.log("EXECUTING  SET TIMEOUT 222222222222 ");
  //     console.log(padStyleState);
  //     activeDrumpkey(padStyleState) 
  //   },10000);
}






  return (
    
    <div className="key"  id={props.id}
    onClick={playSound }
    style={padStyleState}
    >
      {console.log('padStyleState')}
      {console.log(padStyleState)}
      <audio 
      className='clip'
       id={props.keyName}
      src={props.src}
     
      />
      {props.keyName}
      </div>
           
  )
}
const DrumpkeyGroup = (props) => {

  console.log(props.text); 
     let keyGroup ;  
 
  
  
     keyGroup = props.GroupSound.map((innnerObj,i,arrayWhole) => {
      console.log("innnerObj");
      console.log(innnerObj);
       return (

         
            <Drumpkey keyName={innnerObj.keyTrigger} 
                      id={innnerObj.id}
                      src={innnerObj.url}                  />

                      //  clip={padBankArr[i].url}
                      //  clipId={padBankArr[i].id}
                      //  keyCode={padBankArr[i].keyCode}
                      //  keyTrigger={padBankArr[i].keyTrigger}
                      //  power={this.props.power}
                      //  updateDisplay={this.props.updateDisplay}

                      // keyCode: 81,
                      // keyTrigger: 'Q',
                      // id: 'Heater-1',
                      // url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'


       )
     })
  
    return (        
         
      <div id="keyGroup">{keyGroup} </div>       
    );
      
}
// <button onClick={props.handleKeyPressMethod} >{props.text} </button>    


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      GroupSound :bankOne
    }
  }
  
  render() {
    return (
    <div >
        <header>
          <div className="container">
            <div className="row no-gutter">
              <div className="col-6 no-gutter">
                <p>
                  First P
                </p>
              </div>
              <div className="col-6">
                <p>
                  Second P
                </p>
              </div>
            </div>
            </div>         
        </header>
    <main>
        <div id="drum-machine" className="container d-flex justify-content-center">  
           <article> 
             <section>
             <div className="row no-gutter">
               <div className="col-8  ">   
                      <DrumpkeyGroup GroupSound= {this.state.GroupSound}/>
               </div>  
               
               <div className="col-4">  
                 <p>SECOND COLUMN</p>     
               
               </div>  
             </div>             
           </section>
          </article> 
       </div>        
     </main>
    </div>
    )
  }
}

     
 render(<App/>,document.getElementById('root'));


















// const HandleKeypress1 = () => {

//     const [itWorks, setItWorks] = React.useState(true)

//     React.useEffect(() => {
//         // reference must be same for addEventListener and removeEventListener
//         // = can't use inline arrow function!
//         function listener(event) {
//             if (event.code === 'Space') setItWorks(!itWorks)
//         }
      
//         document.addEventListener('keypress', listener)
      
//         return () => {
//             document.removeEventListener('keypress', listener)
//         }
//     }, [itWorks])

//     return (
//         <div>
//             <p>{itWorks ? 'It works!' : 'It does not'}</p>
//             <button 
//                 onClick={() => setItWorks(!itWorks)}
//             >Press me</button>
//         </div>
//     )
// }
//  render(<HandleKeypress1/>,document.getElementById('root'));
 