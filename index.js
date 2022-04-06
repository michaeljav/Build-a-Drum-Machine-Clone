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

const {Component,useRef,useState,Fragment} = React;
const {render} =ReactDOM;


const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
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


  console.log('props.Volume ++++++++++++++++++++++++++++++++++++++'); 
  console.log(props.Volume); 




  const [padStyleState,setPadStyleState] = React.useState(inactiveStyle); 
  const padStyleStateRef = useRef(inactiveStyle);
        padStyleStateRef.current = padStyleState;
 
  React.useEffect(() => {     

    document.addEventListener('keydown', handleKeyPressMethod);
    // // Specify how to clean up after this effect:
    return () => {
   document.removeEventListener('keydown', handleKeyPressMethod);
    };
  // },[props.handleKeyPressMethod])
  },[]);

  const handleKeyPressMethod =(e) =>{
    
  // alert('Key');

  if(e.keyCode === props.keyCode  ) {
    // console.log(e.keyCode);
    // console.log(props.keyCode );
    playSound();
  }
}


const activeDrumpkey = () =>  {

 if (padStyleStateRef.current.backgroundColor === 'orange') {
 
   setPadStyleState(inactiveStyle);

 }else {
    setPadStyleState(activeStyle);
 }
}


const playSound = () => {
  
  const sound =  document.getElementById(props.keyName);
  //set time in second in 0 for begin from the start
  sound.currentTime = 0;
  sound.play();
  //update in the Parent display name
  props.updateDisplayName(props.id);  
  
  //active color of press
  activeDrumpkey() ;
  setTimeout(() => {
      activeDrumpkey() ;
  },100);
 
}






  return (
    
    <div className="drum-pad"  id={props.id}
    onClick={playSound }
    style={padStyleState}
    >
      {/* {console.log('padStyleState')}
      {console.log(padStyleState)} */}
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


     let keyGroup ;  
 
    if(props.Power){
     keyGroup = props.GroupSound.map((innnerObj,i,arrayWhole) => {    
       return (         
            <Drumpkey keyName={innnerObj.keyTrigger} 
                      id={innnerObj.id}
                      src={innnerObj.url}     
                      updateDisplayName={props.updateDisplayName} 
                      keyCode={innnerObj.keyCode}     
                         />
          // updateDisplayName={props.updateDisplayName} 

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
     });
    }else {
      keyGroup = props.GroupSound.map((innnerObj,i,arrayWhole) => {    
        return (         
             <Drumpkey keyName={innnerObj.keyTrigger} 
                       id={innnerObj.id}
                       src='#'     
                       updateDisplayName={props.updateDisplayName}      
                          />
           // updateDisplayName={props.updateDisplayName} 
 
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
      });
    }


  
    return (        
         
      <div id="keyGroup">{keyGroup} </div>       
    );
      
}
// <button onClick={props.handleKeyPressMethod} >{props.text} </button>    
function ControlPower(props){
  console.log('PROCONTROLPOWER+++++++++++++++');
  console.log(props);
  return ( 
    
               <div className="control">
                      <p>Power</p>
                           <div className="select" onClick= {props.powerControl}>
                            <div className="inner" style={props.powerSlider}></div>
                          </div>
                </div>   
      )
}

function ControlBank(props){

  console.log('PROPS+++++++++++++++++++++');
  console.log(props);
  return ( 
    
               <div className="control">
                      <p>Bank</p>
                           <div className="select" onClick= {props.selectGroupSoundd}>
                            <div className="inner" style={props.bankSliderStyle}></div>
                          </div>
                </div>   
      )
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      GroupSound : bankOne,
      currentPadBankId: 'Heater Kit',
      power:true,
      displayName: String.fromCharCode(160),
      sliderVal:0.2
    }
    //binding the methods to  object
    this.powerControl = this.powerControl.bind(this);
    this.adjustVolumeVariable = this.adjuntVolumeFuntion.bind(this);
    console.log('this+++++++++++');
    console.log(this);
    console.log(this.selectGroupSound);    
    // this.selectGroupSound = this.selectGroupSound.bind(this);
    console.log(this.selectGroupSound);

   
    //I will use this if I don't use Arrow Function
    //set function to this context
    // this.updateDisplayName = this.updateDisplayName.bind(this);
    
  }

  powerControl() {

    this.setState( {
      power: !this.state.power,
      displayName: String.fromCharCode(160)
    });
  }
  
  // updateDisplayName(valueDisplay) {
  //    console.log('called  valued')
  //   this.setState({
  //     displayName: valueDisplay
  //   });
  // }
  
  //inside of class component  I can't  use const for arrow function 
  updateDisplayName = (valueDisplay) => {
     console.log('called  valuedxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
     console.log(this.state.power);

     if(this.state.power){
    this.setState({
      displayName: valueDisplay
    });
  }
  }
  
//  const updateDisplayName = () =>  {
//  return 'd;

// }

//clear the display
clearDisplay = ()=> {
  this.setState({
    displayName: String.fromCharCode(160)
   });
}

//set new value to input
adjuntVolumeFuntion(e){
  console.log('Event number : '+ e.target.value);
  if(this.state.power){
  this.setState({
    sliderVal: e.target.value,
    displayName: 'Volume: '+Math.round(e.target.value * 100)
  });
  //clean display
   setTimeout(() => this.clearDisplay() ,1000);
}
}

selectGroupSound = () => {

  console.log('ENTERED+++++++++++++++++');
  if(this.state.power) {
    if(this.state.currentPadBankId === 'Heater Kit'){
      this.setState({
        GroupSound:bankTwo,
        displayName: 'Smooth Piano Kit',
        currentPadBankId: 'Smooth Piano Kit'
      });
    }else {
      this.setState({
        GroupSound: bankOne,
        displayName: 'Heater Kit',
        currentPadBankId: 'Heater Kit'
      });
    }
  }

}

 
 
 
  render() {
    const powerSlider = this.state.power 
    ? {
      float: 'right'
    }
    :
    {
      float: 'left'
    }

    const bankSliderStyle = this.state.GroupSound === bankOne 
                       ? {
                         float:'left'
                       }
                       :{
                         float: 'right'
                       };


                       console.log('clip +++++++++++++++++++++++');
                       console.log(document.getElementsByClassName('clip'));



                       /* This confusing code is used to convert the argument object which has .length property and numeric indices (so-called array-like object) to a real Array, that invokes two methods: slice() and call().

                       https://www.stevenchang.tw/blog/2020/05/23/JavaScript-slice-call-function#:~:text=The%20slice()%20method%20returns,end%20(%20end%20not%20included).&text=Both%20call()%20and%20apply,value%20and%20arguments%20provided%20individually.

                       let links = document.querySelectorAll('.link');

                                  let arr1 = [...links]; // iterable argument
                                  let arr2 = Array.from(links);
                                  let arr3 = [].slice.call(links); // [].slice === Array.prototype.slice;
                                  let arr4 = Array.prototype.slice(links);
                       */


                {      
                  /*
                  Theres no volume attribute supported by browsers so you must set the volume property in JavaScript
                  https://stackoverflow.com/questions/33747398/html-audio-tag-volume
                  */              
                    const clips = [...document.getElementsByClassName('clip')];
                    clips.forEach(sound => {                      
                      sound.volume = this.state.sliderVal;
                      
                    });
                  }


                // {
                //     // const clips = [].slice.call(document.getElementsByClassName('clip'));
                //     const clips = [...document.getElementsByClassName('clip')];
                    
                //     clips.forEach(sound => {
                //       console.log('sound+++++++++++++++++++++++++++++++++');
                //       console.log(sound);
                //       sound.volume = this.state.sliderVal;
                //       console.log(sound.volume);
                //     });
                //   }


                      //  {
                      //   const clips = [].slice.call(document.getElementsByClassName('clip'));
                      //   clips.forEach(sound => {
                      //     sound.volume = this.state.sliderVal;
                      //   });
                      // }
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
                      <DrumpkeyGroup GroupSound= {this.state.GroupSound} updateDisplayName = {this.updateDisplayName} Power={this.state.power}  />
               </div>  
               
               <div className="col-4">  
                 <div className="row no-gutter"><p>SECOND COLUMN</p>    </div>
                 <div className="row no-gutter">
                     <ControlPower powerControl= {this.powerControl} powerSlider = {powerSlider} />  
                     <p id="display">{this.state.displayName}</p>
                     <div className="volume-slider">
                        <input type="range" 
                             max='1'
                             min='0'
                             step='0.01'
                             onChange={this.adjustVolumeVariable}
                             value={this.state.sliderVal}
                        />
                     </div>
                     
                     <ControlBank selectGroupSoundd= {this.selectGroupSound} bankSliderStyle = {bankSliderStyle} />  
               </div>
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
 