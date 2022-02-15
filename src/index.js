import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextDiv from './components/TextDiv';

const listOfStrings = ["dfhfghghjhg",
  "dfgfghghjhgjhfdper",
  "fdgjod;fkgfkghfghkjpoghkjpg",
  "dfjgd;fgkopfgkhopfghpofghgh",
  "fghfg;hf;ghfgohkgfp"];

ReactDOM.render(
  <React.StrictMode>
    <TextDiv  key={listOfStrings} data={listOfStrings} />
  </React.StrictMode>,
  document.getElementById('root')
);

