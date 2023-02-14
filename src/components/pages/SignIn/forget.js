import React,{useState}  from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
import './forget.scss';

function Forget() {

    const[state,setState]=useState(
        {
            email:'',
            password:'',
            confirmpassword:''


        }
    )
    const {email,password,confirmpassword}=state;

    const handlechange=(event,id)=>{
        console.log('event:',event.target.value,id);
        setState({
            ...state,
            [id]:event.target.value
        })
    }
    const handlesubmit=(event)=>{
        const{email,password,confirmpassword}=state;
        console.log('email',email);
        console.log('password',password);
        console.log('confirmpassword',confirmpassword);

    }

    return (
        <div className='center'>
            <div className='forget'>
                <h2>Forget</h2>
                    <label><b>email</b></label><br></br>
                    <input type="text" placeholder='eg. srivignesh@gmail.com' 
                    value={email}
                    onChange={(event)=>handlechange(event,'email')}
                    id="name"></input><br></br>
                    <label><b>Password</b></label><br></br>
                    <input type="password" placeholder='eg. pass##'
                    value={password}
                    onChange={(event)=>handlechange(event,'password')}
                    id="name"></input><br></br>
                    <label><b>Confirm Password</b></label><br></br>
                    <input type="password" placeholder='eg. pass##'
                    value={confirmpassword}
                    onChange={(event)=>handlechange(event,'confirmpassword')}
                    id="name"></input><br></br>
                    <button type='submit' value='submit'
                    onClick={()=>handlesubmit()}
                    id="button">Submit</button>
            </div>
            
        </div>
    )
}

export default Forget;