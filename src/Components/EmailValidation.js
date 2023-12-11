import { createRef } from "react";

function Email(){
    var EmailRef=createRef()
    var PasswordRef=createRef()
    const handleClick1=(e)=>{
        e.preventDefault();
        if(/....@gmail.com$/.test(EmailRef.current.value) && /[0-9]/.test(PasswordRef.current.value) && /[a-zA-z]/.test(PasswordRef.current.value) && /[^a-zA-Z0-9]/.test(PasswordRef.current.value) && PasswordRef.current.value.length>=5 && PasswordRef.current.value.length<=8){
            alert("Login Successful")
        }
        else{
            alert('invalid credentials')
        }

    }
    return(
        <div>
            <form onSubmit={handleClick1}>
                <label>Email Address:</label>
                <input type="email" ref={EmailRef}/><br/>
                <label>Password:</label>
                <input type="password" ref={PasswordRef}/><br/>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Email;