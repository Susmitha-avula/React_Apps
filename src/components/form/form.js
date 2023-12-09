function Form(){
    var k='SignUp'
    return(
        <form style={{width:'350px'}}>
            <fieldset>
                <legend>SignUp Form</legend>
                <label>Enter Your Name:</label>
                <input type="text" placeholder="Enter Your Name"/><br/>
                <label>Enter Your Date Of Birth:</label>
                <input type="Date" /><br/>
                <label>Email Address:</label>
                <input type="email" /><br/>
                <label>Select Skill: </label>
                <select>
                    <option>--select--</option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JS</option>
                    <option>React</option>
                    <option>BootStrap</option>
                </select><br/>
                <label>Password: </label>
                <input type="password"/><br/>
                <label>Confirm Password:</label>
                <input type="password"/><br/><br/>
                <input type="submit" value={k}/>
            </fieldset>
        </form>
    )
}
export default Form;