import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IcecreamView = () => {
  const icecream = useSelector(state => state.icecream.numOfIcecream)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  return (
    <div>
      <h2>Number of icecreams - {icecream}</h2>
      <button onClick={() => dispatch(ordered())}>order icecreams</button>
      <input value={value} onChange={e => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>restock</button>
    </div>
  )
}

export default IcecreamView