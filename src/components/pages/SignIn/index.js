
import React,{useState}  from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Login() {
    const[state,setState]=useState(
        {
            username:'',
            password:''
        }
    )
    const {username,password}=state;

    const handlechange=(event,id)=>{
        console.log('event:',event.target.value,id);
        setState({
            ...state,
            [id]:event.target.value
        })
    }
    const handlesubmit=(event)=>{
        const{username,password}=state;

        console.log('username',username);
        console.log('password',password);
    }

    return (
        <div className='center'>
        <div className='login-container'>
            <h2>Login</h2> 
                <label><b>Username</b></label><br></br>
                <input type="text" placeholder='eg. srivignesh'  
                value={username}
                onChange={(event)=>handlechange(event,'username')}
                id='name'>
                    </input><br></br>
                <label><b>Password</b></label><br></br>
                <input type="password" placeholder='eg. pass##'
                value={password}
                onChange={(event)=>handlechange(event,'password')} 
                id='name'>
                    </input><br></br>
                <button type="submit" value="submit" 
                onClick={()=>handlesubmit()}
                id='button'>Submit</button><br></br>
                <Link to='/forget' ><b>Forget Password</b></Link><br></br>
                <Link to='/signup' > <b>Signup</b></Link>
                
                
        </div>
        </div>
               
            
    )
}

export default Login;