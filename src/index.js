import React from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import './styles.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';



// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

//OCTAVE NOTES
const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

var midinote = require('midi-note')
var midifreq = require('midi-freq')(440)
function onPlayNoteInput(midiNumber) {
  document.getElementById('notesbar').innerHTML = '<strong>MidiNumber:</strong>&nbsp;' + midiNumber + '&nbsp;&nbsp;&nbsp;&nbsp;<strong>MusicNote:</strong>&nbsp;&nbsp;' + midinote(midiNumber) +'&nbsp;&nbsp;&nbsp;&nbsp;<strong>Note Frequency:</strong>&nbsp;&nbsp;' +midifreq(midiNumber).toFixed(3); 
};

function App() {
  return (
    <div>
       
      <div className="mt-5">
        
        <Router>
          
        <Navbar />
        <div id='notesbar' className="notesbar"> </div>
        <BasicPiano />

        </Router>

        
        
      </div>

    </div>
  );
}

function BasicPiano() {
  return (
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
          <Piano
          noteRange={noteRange}
          width={containerWidth}
          playNote={playNote}
          onPlayNoteInput={onPlayNoteInput}
          stopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
        />
      )}
    />
   )}
   </DimensionsProvider>
  );
}
// eslint-disable-next-line
function ResponsivePiano(props) {
  return (
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={containerWidth}
              playNote={playNote}
              stopNote={stopNote}
              disabled={isLoading}
              {...props}
            />
          )}
        />
      )}
    </DimensionsProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

