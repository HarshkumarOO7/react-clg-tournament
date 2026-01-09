import { useState } from "react"
function Reg(){

    const [form,setForm] = useState({
        fname:"",
        email:"",
        password:"",
        city:"",
        mobile:"",
    })

    const fillform = (e) => {
        
        e.preventDefault();


    }

return(
    <>
    <h1>Reg Page</h1>
        <form method="post" onSubmit={fillform}>
            <div className="container">
                <label htmlFor="">Full Name : </label>
                <input type="text" placeholder="Enter name" value={form.fname} />
            </div>
            <div className="container">
                <label htmlFor="">Email : </label>
                <input type="email" placeholder="abc@gmail.com" value={form.fname} />
            </div>
            <div className="container">
                <label htmlFor="">Password : </label>
                <input type="password" placeholder="Enter Password" value={form.fname} />
            </div>
            <div className="container">
                <label htmlFor="">City : </label>
                <input type="text" placeholder="Enter City Name" value={form.fname} />
            </div>
            <div className="container">
                <label htmlFor="">Mobile No :</label>
                <input type="text" placeholder="XXXXXXXXXX" value={form.fname} />
            </div>
            <br></br>
            <div className="container">
                <button type="Submit">Registration</button>
            </div>
        </form>
    </>
)

}
export default Reg