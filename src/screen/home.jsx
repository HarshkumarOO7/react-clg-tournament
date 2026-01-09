import { useState } from "react"
import '../static/home.css'


function Home(props){
    const [count,incres] = useState(0);
    const [show,setShow] = useState(false);
    // const {name,data} = props;
    const increment = 1;
    const incress = () => {
        if(count < 20){
        incres(count+increment);
        }
        else{
            alert("you cant add more then"+ count +"!!!")
            setShow(true)
        }
    }
    const decress = () => {
        if(count > 0){
        incres(count - increment);
        }
        else{
            alert("you cant subtrack more then "+  count  +" !!! ")
            setShow(true)
        }
    }
    return(
        <>
            <h1>Hey { name } </h1>
            <h1>props.name</h1>
            <div className="container">
                <table>
                <tr><th>Name</th><th>No</th></tr>
            {
                props.data.map((per,ind)=>(
                        <>
                            <tr>
                                <td>{per.name}</td><td>{per.no}</td>
                            </tr>
                        </>
                ))}
            </table>
            </div>
            <h3>This is home page</h3>
            <button onClick={incress}>Increass</button>
            <button onClick={decress}>Decress</button>
            {!show && <button onClick={()=> setShow(true)}>Show</button>}
           {show &&  <button onClick={()=> setShow(false)}>Hide</button>}

            {show && <h1>Total : {count}</h1>}

        </>
    )
}
export default Home