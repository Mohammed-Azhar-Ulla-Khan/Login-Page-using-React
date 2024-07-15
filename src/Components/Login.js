import React from 'react'
import "./Login.css"

class Login extends React.Component{
    render(){ 
        return(
            <div className='back'>
                <div className='back1'>
                    <h1 className="header">Login page</h1>
                    <div className='forms'>
                        <form className='forms'>
                            <div className="input">
                                <label for="email">Email</label>
                                <br></br>
                                <input type="email" id="email" name="email" placeholder="Email" required className='box' ></input>
                            </div>
                            <div className="input">
                                <label for="password">Password</label>
                                <br>
                                </br>
                                <input type="password" id="password" name="password" placeholder="Password" required className='box'></input>
                            </div>
                            <div >
                                <br></br>
                                <button type="submit"className='button' >Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
export default Login;