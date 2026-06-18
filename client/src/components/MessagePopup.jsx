import { useState } from "react";
import API from "../services/api";

function MessagePopup(){

  const [message,setMessage] = useState("");

  const [loading,setLoading] = useState(false);


  const sendResponse = async()=>{

    try{

      setLoading(true);


      const res = await API.post("/respond",{

        action:"accepted",

        message:message

      });


      console.log(res.data);


      alert("❤️ Message Sent");


      setMessage("");


    }
    catch(error){

      console.log("SEND ERROR:",error);

      alert("Message failed");

    }
    finally{

      setLoading(false);

    }

  }



return (

<div className="message-popup">


<h2>
💌 Bhoomi ka Message
</h2>


<textarea

placeholder="Bhoomi apna message likho..."

value={message}

onChange={(e)=>setMessage(e.target.value)}

/>



<button

onClick={sendResponse}

disabled={loading}

>

{

loading

?

"Sending..."

:

"Send Message ❤️"

}


</button>


</div>

);

}


export default MessagePopup;