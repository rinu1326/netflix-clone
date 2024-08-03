// import React, { useState } from 'react'
// import './Login.css'
// import logo from '../../assets/logo.png'
// import { login,signup } from '../../firebase'


// const Login = () => {
//     const [signState, setSignState] = useState("sign in");

//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");

//     const user_auth = async (e) =>{
//         e.preventDefault();
//         if(signState==="Sign In"){
//             await login(email,password);
//         }else{
//             await signup(name,email,password);
//         }
//     }
  
//     return (
//       <div className='login'>
//         <img src={logo} alt="logo" className='login-logo' />
//         <div className="login-form">
//           <h1>{signState === "sign in" ? "Sign In" : "Sign Up"}</h1>
//           <form>
//             {signState === "sign up" && <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />}
//             <input value={email}onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Your Email' />
//             <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
//             <button onClick={user_auth} type="submit">{signState === "sign in" ? "Sign In" : "Sign Up"}</button>
//             <div className="form-help">
//               <div className="remember">
//                 <input type="checkbox" id="rememberMe" />
//                 <label htmlFor="rememberMe">Remember me</label>
//               </div>
//               <p>Need Help?</p>
//             </div>
//           </form>
//           <div className="form-switch">
//             {signState === "sign in" ? (
//               <p>
//                 New to Netflix? <span onClick={() => setSignState("sign up")}>Sign Up Now</span>
//               </p>
//             ) : (
//               <p>
//                 Already have an account? <span onClick={() => setSignState("sign in")}>Sign In Now</span>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import logo from '../../assets/logo.png';
// import { login, signup } from '../../firebase';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [signState, setSignState] = useState("sign in");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const user_auth = async (e) => {
//     e.preventDefault();
//     try {
//       if (signState === "sign in") {
//         await login(email, password);
//         toast.success("Login successful");
//       } else {
//         await signup(name, email, password);
//         toast.success("Signup successful");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className='login'>
//       <img src={logo} alt="logo" className='login-logo' />
//       <div className="login-form">
//         <h1>{signState === "sign in" ? "Sign In" : "Sign Up"}</h1>
//         <form onSubmit={user_auth}>
//           {signState === "sign up" && <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' />}
//           <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
//           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
//           <button type="submit">{signState === "sign in" ? "Sign In" : "Sign Up"}</button>
//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" id="rememberMe" />
//               <label htmlFor="rememberMe">Remember me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className="form-switch">
//           {signState === "sign in" ? (
//             <p>
//               New to Netflix? <span onClick={() => setSignState("sign up")}>Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account? <span onClick={() => setSignState("sign in")}>Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading,setLoading]= useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      if (signState === "sign in") {
        await login(email, password);
        toast.success("Login successful");
      } else {
        await signup(name, email, password);
        toast.success("Signup successful");
      }
      setLoading(false)
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    loading?<div className="login-spinner">
        <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="logo" className='login-logo' />
      <div className="login-form">
        <h1>{signState === "sign in" ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={userAuth}>
          {signState === "sign up" && (
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder='Your Name' 
            />
          )}
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder='Your Email' 
          />
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder='Password' 
          />
          <button type="submit">
            {signState === "sign in" ? "Sign In" : "Sign Up"}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "sign in" ? (
            <p>
              New to Netflix? <span onClick={() => setSignState("sign up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={() => setSignState("sign in")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Login;

