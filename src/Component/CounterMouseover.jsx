import React from 'react'
import HocComponent from './HocComponent'

const CounterMouseover = (props) => {
    // const [count,setCount]=useState(0)
    // const Mouseover=()=>{
    //     setCount(count+1);
    // }
    const {Counter,UpdateCounter}=props;
  return (
    <div className='mouese'>
        <div><p>Mouse over Counter:{Counter}</p></div>
        {/* <button onMouseOver={Mouseover}>Increment on mouseover!!</button> */}
        <button onMouseOver={UpdateCounter} id="mouseoverbtn">Increment on mouseover!!</button>
    </div>
  )
}

export default HocComponent(CounterMouseover);