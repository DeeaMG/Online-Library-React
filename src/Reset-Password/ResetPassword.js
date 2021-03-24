import React, {useState} from 'react';
import '../LogIn-SignUp/Log-In.scss';
import {useAuth} from '../AuthContext';
import { useHistory } from 'react-router-dom';


const ResetPassword = () =>
{
    const {resetPassword} = useAuth();    
    const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [msg, setMsg] = useState('');
    const history = useHistory();

    const onSubmit = (event) => 
    {
        event.preventDefault();

        if(email) 
        {
            resetPassword(email);
            setMsg("Check you inbox for further instructions.");
            history.push('/log-in');
        }
        else setError("No email given");
    }

    const getEmail = (event) =>
    {
        setEmail(event.target.value);
    }

    return (
        <div className='reset-pass'>
            <form className="cont reset-box" onSubmit={onSubmit}>
                <h2 className='title reset-pass'>Reset Password</h2>
				{msg && <div className='msgBox'><h4 className='msg'>{msg}</h4></div>}
				{error && <div className='errorBox'><h4 className='errorMsg'>{error}</h4></div>}
                <div className={'input-box'}>
                    <label>Email</label>
                    <input type={'email'} onChange={getEmail} className={'inputs'}/>
                    <input type='submit' value={'Continue'} className={'submit submitBtn'}/>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;