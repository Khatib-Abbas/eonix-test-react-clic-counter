import React from 'react'
import {setAddValueToCounter,setRemoveValueToCounter} from '../../store/counter/counter.action'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {selectCurrentCounter} from "../../store/counter/counter.selector";
const Counter = ()=>{
    const dispatch = useDispatch()
    const currentCounter = useSelector(selectCurrentCounter)

    const addNumberCounter = ()=>{
        dispatch(setAddValueToCounter(currentCounter))
    }
    const minusNumberCounter = ()=>{
        if(currentCounter>0){
            dispatch(setRemoveValueToCounter(currentCounter))
        }
    }
    return(<div>
      <button onClick={addNumberCounter}>+</button>
      {currentCounter}
      <button disabled={currentCounter===0} onClick={minusNumberCounter}>-</button>
    </div>)
}
export  default  Counter