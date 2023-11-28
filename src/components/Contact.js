import React from "react";

const Contact = () => {
    return (
        <div style={{justifyContent:"space-between", margin:"10% 25%"}}>
            <h1>Contact Us Page</h1>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Message"/>
                <button style={{padding:"20px",marginLeft:"10px",backgroundColor:"green",borderRadius:"5px",fontSize:"20px"}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;