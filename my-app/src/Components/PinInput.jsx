import React,{forwardRef} from "react"

const PinInput = forwardRef(
  ({maxLength,onChangeFunc,onBackspaceFunc},ref) => {
const handleKeyPress=(e)=>{
  if(e.keyCode===8){
    onBackspaceFunc(e);
  }else{
    onChangeFunc(e)
  }
  }




  return  <input  ref={ref} maxLength={maxLength} onKeyUp={handleKeyPress}/>

});

export default PinInput;