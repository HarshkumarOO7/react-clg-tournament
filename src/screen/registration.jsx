import { useState } from "react";

function Reg(){

    const [fname,setFname] = useState();
    const [lname,setLname] = useState();
    const [mno,setMno] = useState();
    const [mnoError,setMnoerror] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [city,setCity] = useState();
    const [gender,setGender] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!fname){
            alert("Enter Fisrt Name !!!");
            return;
        }

        if(!lname){
            alert("Enter Last Name !!!");
            return;
        }

        if(!mno){
            alert("Enter Mobile No !!!");
            return;
        }

        if(mno.length !== 10){
            alert("Mobile number must be 10 digit !!!");
            return;
        }

        if(!email){
            alert("Enter mobile number!!! ");
            return;
        }

        if(!city){
            alert("select the city !!!");
            return;
        }

        if(!gender){
            alert("Pleace select the gender !!!");
            return;
        }

        alert("Form submited : "+ fname +" "+ lname +" "+ mno +" "+ email +" "+ password +" "+ city +" "+ gender )

    }

    return(
        <>
            <h1>Registration Page </h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="contanier">
                    <label htmlFor="">First Name : </label>
                    <input type="text" id="fname" onChange={(e)=>setFname(e.target.value)} value={fname}  placeholder="Enter First Name" ></input>
                </div>
                <div className="contanier">
                    <label htmlFor="">Last Name : </label>
                    <input type="text" id="lname" onChange={(e) => setLname(e.target.value)} value={lname} placeholder="Enter Last Name" required ></input>
                </div>
                <div className="contanier">
                    <label htmlFor="">Mobile No : </label>
                    <input type="text" id="mno" onChange={(e) => {const value=e.target.value; 
                        if (!/^\d*$/.test(value)) return; 
                        setMno(value);
                        if(value.length<10){
                            setMnoerror("Mobile number must be 10 digit !!!")
                        }
                        else{
                            setMnoerror("");
                        }
                    }} value={mno} maxLength={10} placeholder="xxxxxxxxxx" required></input>
                    {mnoError && <p stule={{color:"red"}}>{mnoError}</p>}
                </div>
                <div className="contanier">
                    <label htmlFor="">Gender :</label>
                    <div className="contanier">
                        Male : <input type="radio" onChange={(e) => setGender(e.target.value)} value="Male" id="male" name="gender" required></input><br/>
                        Female : <input type="radio" onChange={(e) => setGender(e.target.value)} value="Female"  id="female" name="gender" required></input>
                    </div>
                </div>
                <div className="contanier">
                    <label htmlFor="">City : </label>
                    <input type="text" id="city" onChange={(e) => setCity(e.target.value)} value={city} placeholder="Enter Your City" required></input>
                </div>
                <div className="contanier">
                    <label htmlFor="">Email : </label>
                    <input type="Email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="xxxxx@gmail.com" required></input>
                </div>
                <div className="contanier">
                    <label htmlFor="">Password : </label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}  placeholder="PASSWORD" required></input>
                </div>
                <br />
                <div className="contanier">
                    <button type="submit">Submit</button>    
                </div>
            </form>
        </>
    )
}

export default Reg