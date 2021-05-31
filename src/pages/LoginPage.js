import React from 'react'

export default function LoginPage(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.updateToken("blah")
    }
    return (
       
             <form id="LoginForm" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <button type="submit" class="btn">Login</button>
                        
                        </form>
       
    )
}
