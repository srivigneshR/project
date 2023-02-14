import React,{useState}  from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';

import './signup.scss';

function Signup() {

    const[state,setState]=useState(
        {
            username:'',
            email:'',
            phone:'',
            password:''


        }
    )
    const {username,email,phone,password}=state;

    const handlechange=(event,id)=>{
        console.log('event:',event.target.value,id);
        setState({
            ...state,
            [id]:event.target.value
        })
    }
    const handlesubmit=(event)=>{
        const{username,email,phone,password}=state;

        console.log('username',username);
        console.log('email',email);
        console.log('phone',phone);
        console.log('password',password);

    }

    return (
        <div className='center'>
            <div className='signup'>
                <h2>Signup</h2>
                    <label>Username</label><br></br>
                    <input type="text" placeholder='eg. srivignesh'
                    value={username}
                    onChange={(event)=>handlechange(event,'username')}
                    id="name"></input><br></br>
                    <label>email</label><br></br>
                    <input type="text" placeholder='eg. srivignesh@gmail.com'
                    value={email}
                    onChange={(event)=>handlechange(event,'email')}
                    id="name"></input><br></br>
                    <label>phone</label><br></br>
                    <input type="number" placeholder='eg. 8668987'
                    value={phone}
                    onChange={(event)=>handlechange(event,'phone')}
                    id="name"></input><br></br>
                    <label>Password</label><br></br>
                    <input type="password" placeholder='eg. pass##' 
                    value={password}
                    onChange={(event)=>handlechange(event,'password')}
                    id="name"></input><br></br>
                    <button type='submit' value='submit'
                    onClick={()=>handlesubmit()}
                    id="button">Signup</button>
                    
            </div>
            
        </div>
    )
}

export default Signup;