function Form1(){
    return(
        <div>
            <h2>Form Using Bootstrap</h2>
            <form>
                <label>Full Name: </label>
                <input className="form-control w-50" type="text" placeholder="Enter your full name" />
                <label>Mobile Number</label>
                <input type="tel" className="form-control w-25" placeholder="mobile number" />
                <label>Email Address: </label>
                <input  type="email" className="form-control" placeholder="Email ID"/>
                <label>Create Password: </label>
                <input type="password" className="form-control" placeholder="confirm password"/>
                <label>Confirm Password: </label>
                <input type="password" className="form-control" placeholder="confirm password"/>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    )
}
export default Form1;