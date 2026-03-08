let time = () =>  {

  let currtime= new Date();

  return <p className="lead">
   This is the current time : {currtime.toLocaleDateString()} - {" "} {currtime.toLocaleTimeString()}</p>
  
}

export default time;