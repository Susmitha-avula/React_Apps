import { useState } from "react";
import axios from "axios";
function Register() {
  var [Fname, setFname] = useState("");
  var [Sname, setSname] = useState("");
  var [EmailRef, setEmail] = useState("");
  var [Password, setPassword] = useState("");
  var [Cpassword, setCpassword] = useState("");
  var [Gender, setGender] = useState("");
  var [Address, setAddress] = useState("");
  const handleClick1 = (e) => {
    e.preventDefault();
    setFname(e.target.value);
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    setSname(e.target.value);
  };
  const handleClick3 = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleClick4 = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleClick5 = (e) => {
    e.preventDefault();
    setCpassword(e.target.value);
  };
  const handleClick6 = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };
  const handleClick7 = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const handleClick8 = (e) => {
    e.preventDefault();
    const UserDetails = {
      FirstName: Fname,
      LastName: Sname,
      EmailAdd: EmailRef,
      Password: Password,
      Gender: Gender,
      Address: Address,
    };
    axios.post('https://dummyjson.com/auth/login', {
        username: "kminchelle",
        password: "0lelplR"
    }).then(res=>console.log(res)).catch(err=>console.log(err))
    // axios.post('https://dummyjson.com/auth/login', UserDetails)
    //   .then(function (response) {
    //     console.log("Data Posted Successfully");
    //   })
    //   .catch(function (error) {
    //     console.log("Error found while posting");
    //   });
  };
  return (
    <div>
      <form>
        <label>First Name:</label>
        <input type="text" value={Fname} onChange={handleClick1}></input>
        <br />
        {/^[A-Z]/.test(Fname) && Fname.length > 3 ? null : (
          <p>
            First name must start with capital letter and length should be
            greater that 3
          </p>
        )}
        <label>Last Name:</label>
        <input type="text" value={Sname} onChange={handleClick2}></input>
        <br />
        {/^[A-Z]/.test(Sname) && Sname.length > 3 ? null : (
          <p>
            Last name must start with capital letter and length should be
            greater that 3
          </p>
        )}
        <label>Email:</label>
        <input type="email" value={EmailRef} onChange={handleClick3}></input>
        <br />
        {/.....@gmail.com$/.test(EmailRef) && EmailRef.length > 15 ? null : (
          <p>
            Email must have the length greater than 15 and endswith @gmail.com
          </p>
        )}
        <label>Password:</label>
        <input type="Password" value={Password} onChange={handleClick4}></input>
        <br />
        {/[0-9]/.test(Password) &&
        /[a-zA-z]/.test(Password) &&
        /[^a-zA-Z0-9]/.test(Password) &&
        Password.length >= 5 &&
        Password.length <= 8 ? null : (
          <p>
            Password should include Capital letter, small letter, number and a
            special symbol
          </p>
        )}
        <label>Confirm Password:</label>
        <input
          type="password"
          value={Cpassword}
          onChange={handleClick5}
        ></input>
        <br />
        {Password === Cpassword ? null : (
          <p>confirm password should be same as password</p>
        )}
        <label>Gender:</label>
        <br />
        <input
          type="radio"
          value={"Male"}
          name="Gender"
          onChange={handleClick6}
        ></input>
        Male
        <br />
        <input
          type="radio"
          value={"Female"}
          name="Gender"
          onChange={handleClick6}
        ></input>
        Female
        <br />
        <label>Address:</label>
        <select>
          <option value={Address} onChange={handleClick7}>
            --select--
          </option>
          <option value={"Telangana"}>Telangana</option>
          <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
          <option value={"Tamil Nadu"}>Tamil Nadu</option>
        </select>
        <input type="submit" onClick={handleClick8} />
      </form>
    </div>
  );
}
export default Register;
