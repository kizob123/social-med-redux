

import {useSelector, useDispatch} from 'react-redux'
import { actions } from '../redux/storeslice';
function About() {
  const initState = useSelector(state=>state.counter.counter)
  const dispatch = useDispatch();
  const increase = ()=>{
    dispatch(actions.increase())
   console.log(actions);
  }
  const addTo = () => {
      dispatch(actions.addTo(12))
      console.log(actions);
  }
  return (
    <div className="App">
     <p>
     {initState}<br/>
        </p> 
     <button onClick={increase}>Increase</button>
     <button onClick={addTo}>Add 12</button>
    </div>
  );
}

export default About;
