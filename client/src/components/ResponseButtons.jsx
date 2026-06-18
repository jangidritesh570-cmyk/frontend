import { useState } from "react";
import API from "../services/api";
import MessagePopup from "./MessagePopup";

function ResponseButtons({
  accepted,
  setAccepted,
}) {

  const [loading,setLoading] = useState(false);

  const [showBox,setShowBox] = useState(false);


  const sendResponse = async(action)=>{

    try{

      setLoading(true);


      if(action === "accepted"){

        setAccepted(true);

        setShowBox(true);

        return;

      }


      await API.post("/respond",{

        action:"not_yet"

      });


      alert("😒 Abhi bhi gussa hai");


    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  }



return (

<div className="btn-container">


<button

className="accept-btn"

disabled={loading}

onClick={()=>sendResponse("accepted")}

>

❤️ Sorry Accept

</button>



<button

className="reject-btn"

disabled={loading}

onClick={()=>sendResponse("not_yet")}

>

😒 Abhi Nahi

</button>



{accepted && (

<h2 className="success-msg">

❤️ Bhoomi ne Sorry Accept kar li ❤️

</h2>

)}



{showBox && (

<MessagePopup/>

)}


</div>

);

}


export default ResponseButtons;