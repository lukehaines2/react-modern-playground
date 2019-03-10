import React from "react";

export default ({history, location}) => {
  // This is not the ideal way to bind apparently!
  // But it's a 404 page with no children soooo ;)
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div>
      <h1>LOL 404 not found!</h1>
      <p>We couldn't find a page matching the url <code>{location.pathname}</code>!</p>
      <button onClick={back}>Try goin back m8</button>
    </div>
  )
}
