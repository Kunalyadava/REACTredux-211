import React,{useEffect,useRef,useState} from "react"
import PropTypes from  "prop-types"
import PinInput from "./PinInput";

const Pin = ({length,maxLength,setPin}) => {
    const [inputBox]=useState(new Array(length).fill("q"))
    const [inputBoxValue]=useState(new Array (length).fill(""));
    const inputRef=useRef([]);

    const onChangeHandler=(e,index)=>{
        inputBoxValue[index]=e.target.value;

    if(index<length-1 && e.target.value.length>0){
        inputRef.current[index+1].focus();
        }
        setPin (inputBoxValue.join(""));
    }

    const backspaceHandler =(e,index)=>{
        if(index>0){
            inputRef.current[index-1].focus()
        }
        inputBoxValue[index]=e.target.value;
        console.log(inputBoxValue);

    }


    const handlePasteEvent =(e)=>{
        const data=e.clipboardData
        .getData("text")
        .split("")
        .filter((item,index)=> index < length);

        data.forEach((item,index)=>{
            inputRef.current[index].value=item;
            inputBoxValue[index]=item;
            if(index < length-1){
                inputRef.current[index+1].focus();
            }
        })
        setPin(inputBoxValue.join(""))
        }

  return (
    <div onPaste={handlePasteEvent}>
        {inputBox.map((item,index)=>{
            return (
            <PinInput 
            ref={(element)=>{
                inputRef.current[index]=element;
            }}
            key={index}
             maxLength={maxLength}
             onChangeFunc={(e)=>   onChangeHandler(e,index)}       
                onBackspaceFunc={(e)=> backspaceHandler(e,index)}
                />
            )   
        })}
    </div>
  )
    }

export default Pin;
Pin.propTypes={
    length:PropTypes.number.isRequired,
    maxLength:PropTypes.number,
}
//npm i prop-types
//how to change input focus ?
//.focus() method is available only in react dom tag