import React, { useState, useRef, useEffect }  from "react";
// eslint-disable-next-line
import spinner from "!!url-loader!../static/svg/adludio-dots.svg";
import "../App.css";

export default () => {
  const [ didTimeout, setVal ] = useState(false)

  waitFor(250, () => setVal(true))

  if (didTimeout) {
    return (
      <div className="spinnerContainer">
        <img src={spinner} className="spinnerImg" alt="logo" />
        <p>LOADING....</p>
      </div>
    )
  } else {
    return false
  }
}

function waitFor(delay, callback) {
  // This is remembered between renders
  const cbRef = useRef()

  // Set the current callback ref to wait-time
  useEffect(
    () => { cbRef.current = callback },
    [callback]
  )

  // Set up the interval.
  useEffect(
    () => {
      const id = setTimeout(() => cbRef.current(true), delay)
      return () => clearTimeout(id)
    },
    [delay]
  )
}
