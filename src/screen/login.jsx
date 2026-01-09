function Login(){
    const saveLoginData =() => {
        alert("Login Done 👍")
    }

    return(
        <div>
            <h1>Login page</h1>
            <button onClick={saveLoginData} >Login</button>
        </div>
    )

}

export default Login