import React from "react";
import "../css/Inbox.css";
import Profile from "../images/user.png";

export default function Inbox() {
  return (
    <div>
      <div className="inbox">
        <div className="N-1">
          <div className="N-input">
            <input type="Search" placeholder="Search User..."></input>
            <svg
              id="N-Search"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>

          <div className="N-2">
            <div className="N-2-Chat">
              <div className="Profileimg">
                <img src={Profile}></img>
              </div>
              <div className="Username">
                <h5>Username</h5>
                <h6>Ready For The Next ...</h6>
              </div>
              <div className="Lastseen">Sep 14,22</div>
            </div>

            <div className="N-2-Chat">
              <div className="Profileimg">
                <img src={Profile}></img>
              </div>
              <div className="Username">
                <h5>Username</h5>
                <h6>Ready For The Next ...</h6>
              </div>
              <div className="Lastseen">Sep 14,22</div>
            </div>

            <div className="N-2-Chat">
              <div className="Profileimg">
                <img src={Profile}></img>
              </div>
              <div className="Username">
                <h5>Username</h5>
                <h6>Ready For The Next ...</h6>
              </div>
              <div className="Lastseen">Sep 14,22</div>
            </div>

            <div className="N-2-Chat">
              <div className="Profileimg">
                <img src={Profile}></img>
              </div>
              <div className="Username">
                <h5>Username</h5>
                <h6>Ready For The Next ...</h6>
              </div>
              <div className="Lastseen">Sep 14,22</div>
            </div>

            <div className="N-2-Chat">
              <div className="Profileimg">
                <img src={Profile}></img>
              </div>
              <div className="Username">
                <h5>Username</h5>
                <h6>Ready For The Next ...</h6>
              </div>
              <div className="Lastseen">Sep 14,22</div>
            </div>
          </div>
        </div>

        <div className="inbox-2">
            <div className="PPPPPP">
            <div className="Profileimg2">
            <div className="Profileimg" id="inboxchatimg">
                <img src={Profile}></img>
              </div>

              <div className="profileonline">
                <h5>
                  Natty Heavy
                  <span>
                    <svg
                      id="onlinedott"
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      class="bi bi-dot"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>{" "}
                    Online
                  </span>
                </h5>
                <h6>@NattyHeavy</h6>
              </div>
            </div>



              <div>
              <svg
                id="dott"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>

















            </div>
            <hr id="HHHHRRRR" />

    <br /><br /><br /><br /><br /><br /><br />

            <div className="CHAtting">
            <div className="Chat-11">
              <h5>Mar 09,22 - 18:50 PM</h5>
              <div id="Cchat">
                <div className="Profileimg" id="inboxchatimg">
                  <img src={Profile}></img>
                </div>

                <div id="textmessage">
                  <h6>Looking Forward to talk with you today ..</h6>
                </div>
              </div>
            </div>







            <div className="Chat-11" id="CChat-11">
              <h5>Mar 09,22 - 18:50 PM</h5>
              <div id="Cchat" className="CHATCHAT">
                <div id="textmessage">
                  <h6>Looking Forward to talk with you today ..</h6>
                </div>
                <div className="Profileimg" id="inboxchatimg">
                  <img src={Profile}></img>
                </div>
              </div>
            </div>


            </div>
            <br id="br" /><br id="br" /><br id="br" /><br id="br" /><br id="br" /><br />

            <hr id="HHHHRRRR" />


            <div className="keybord">
            <ul>
              <li>
                <input type="text" placeholder="Type a Message..."></input>{" "}
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-camera-video-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                  />
                </svg>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-emoji-smile-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                </svg>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-mic-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </li>
            </ul>
          </div>








        </div>
      </div>
    </div>
  );
}
