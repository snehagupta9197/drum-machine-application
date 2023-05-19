// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import userEvent from '@testing-library/user-event';

function App() {
  const [currentState, setcurrentState] = useState("");
  useEffect(() => {
    document.addEventListener('keydown', (event)=>{
      console.log(event.key);
      audioPlay(event.key.toUpperCase())
    })
  }, [])
  
  const drumPadsArry = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  function audioPlay(soucre){
    const item = document.getElementById(soucre);
    console.log(item);
    item.play();
    setcurrentState(soucre);

  }
  return (
    <div className="App" >
      <div id="drum-machine">
        <div id="display">{currentState}</div>
          <div className='drum-pads'>
            {drumPadsArry.map((drumPad) => (
              <div 
              key={drumPad.src}
                onClick={() =>{
                  audioPlay(drumPad.text)
                }} 
                className='drum-pad' 
                id={drumPad.src}
              >
              {drumPad.text}
              <audio 
                src={drumPad.src} 
                className='clip' 
                id={drumPad.text}>
              </audio>
            </div>
          ))}
          </div>
         
        
      </div>
    </div>
  );
}

export default App;
