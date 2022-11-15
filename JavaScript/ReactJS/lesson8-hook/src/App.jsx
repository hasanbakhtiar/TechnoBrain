import { useEffect, useState } from "react";
const user = {
  username: "info",
  pass: "info1",
};

const App = () => {


   



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textalert, setTextalert] = useState("");
  const [coloralert, setColoralert] = useState("");


  useEffect(()=>{
    setTimeout(()=>{
     document.querySelector('#page').className = "container mt-5";
     document.querySelector('#preloader').className = "d-none";
    },2000);
    // console.log('changed');
 })

  const formSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setTextalert("fill out this");
      setColoralert("alert-warning");
    } else {
      setTextalert("");
      setColoralert("");
      if (username === user.username && password === user.pass) {
        setTextalert("login success");
        setColoralert("alert-success");
      }else{
        setTextalert("login wrong");
        setColoralert("alert-danger");
      }
    }
  };
  return (
   <>
   <div className="preloader">
    <img id="preloader" className="d-block" src="https://htmlburger.com/blog/wp-content/uploads/2021/07/The-Best-50-Website-Preloaders-Around-the-Web-Example-07.gif" alt="" />
   </div>
  
   <div id="page" className=" d-none">
   <button onClick={()=>{
    document.querySelector('#pass').value = "info1";
    // setPassword('info1')
   }}>old pass</button>
      <form className="col-6" onSubmit={formSubmit}>
        <p className={`alert ${coloralert} text-center`}>{textalert}</p>
        <div className="mb-3">
          <label className="form-label">Username </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="pass"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
   </>
  );
};

export default App;
