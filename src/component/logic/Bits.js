import { useState } from 'react';

import InputFourm from "../display/InputFourm";
import BitDisplay from "../display/BitDisplay";

import './Bits.css'
function Bits(props) {


  const [userBit, setUserBit] = useState();

  function unsignedInt(num) {
    let bit;
    let largeBit;
    let bitNum = [];
    let userNum = num;


    if (num <= Math.pow(2, 64) && num > Math.pow(2, 32)) {
      bit = 64;
    } else if (num <= Math.pow(2, 32) && num > Math.pow(2, 16)) {
      bit = 32;
    } else if (num <= Math.pow(2, 16) && num > Math.pow(2, 8)) {
      bit = 16;
    } else {
      bit = 8;
    }

    for (let i = bit; i >= 0; i--) {
      let currBit = Math.pow(2, i);

      if (userNum > 0 && currBit / userNum <= 1) {
        bitNum.push(1);
        userNum -= currBit;
      } else {
        bitNum.push(0);
      }
    }

    //console.log(bit)
    let dummyBit = bitNum
    //console.log(bitNum.length)
    for(let j=0; j < bitNum.length; j++){
      //console.log(dummyBit)
      if(bitNum[0] === 0 && bit >= 16){
        dummyBit.shift();
      }
      else{
        //console.log(dummyBit)
        break;
      }
    }

    setUserBit(dummyBit);
    
  }


  return (
    <div className="Bit">
      <BitDisplay showBits={userBit}/>
      <InputFourm onConvert={unsignedInt}/>
    </div>
  );
}

export default Bits;




