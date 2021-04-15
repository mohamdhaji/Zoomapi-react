import React, { useEffect, useState } from "react";
import { ZoomMtg } from "@zoomus/websdk";

const Zoom = () => {
  // setup your signature endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
  var signatureEndpoint = "http://localhost:4000";
  var apiKey = "voere_qpQLqQxIXu87xdSw";
  var role = 0;
  var leaveUrl = "http://localhost:3000/survey";
  var userEmail = "";

  const [userName, setUserName] = useState("");
  const [meetingNumber, setMeetingNumber] = useState("");
  const [password, setPassword] = useState("");

  function getSignature(e) {
    e.preventDefault();
    if (userName !== "" && meetingNumber !== "") {
      fetch(signatureEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meetingNumber: meetingNumber,
          role: role,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          startMeeting(response.signature);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: password,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  useEffect(() => {
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.1/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
  }, []);

  return (
    <div>
      <h1>Zoom WebSDK Sample React</h1>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="number"
          placeholder="enter meeting number"
          value={meetingNumber}
          onChange={(event) => setMeetingNumber(event.target.value)}
        />
        <input
          type="text"
          placeholder="enter meeting password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button onClick={getSignature}>Join Meeting</button>
    </div>
  );
};

export default Zoom;
