import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home";
import Background from './Component/Background';
import Menu from "./Component/Menu";
import Materi from "./Component/Materi";
import Video from './Component/Video';
import Animasi from './Component/Animasi';
import Quizz from './Component/Quizz';
import song from "./Asset/song.mp3";
import Info from './Component/info';


function App() {

  function mute () {
    var audio = document.getElementById('song');
    audio.muted = true ;
 
  }

  function unmute () {
    var audio = document.getElementById('song');
    audio.muted = false;
  }

  return (
    <HashRouter>
      <audio id="song" src={song} autoPlay loop />
      <Background />   
      <Routes>
        <Route path="/" element={<Home mute={mute} unmute={unmute}/>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Materi" element={<Materi />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Animasi" element={<Animasi />} />
        <Route path="/Quizz" element={<Quizz />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
