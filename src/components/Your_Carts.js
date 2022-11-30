import React from "react";
import "../css/Your_Carts.css";
import master from "../images/master.png";
import visa from "../images/visa.png";

export default function Your_Carts() {
  return (
    <div>
      <div className="Yourcarts">
        <div className="C-1">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </li>

            <li>
              5535&nbsp;&nbsp;<span>####</span>&nbsp;&nbsp;<span>####</span>
              &nbsp;&nbsp;2296
            </li>
            <li>
              <div id="card">Master Card</div>
              <div>
                <img src={master}></img>
              </div>
            </li>
          </ul>
          <div class="form-check form-switch Ch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label c-4" for="flexSwitchCheckChecked">
              Default Card
            </label>
          </div>
        </div>

        <div className="C-1">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </li>

            <li>
              5535&nbsp;&nbsp;<span>####</span>&nbsp;&nbsp;<span>####</span>
              &nbsp;&nbsp;2296
            </li>
            <li>
              <div id="card">Visa Card</div>
              <div>
                <img src={visa}></img>
              </div>
            </li>
          </ul>
          <div class="form-check form-switch Ch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label c-4" for="flexSwitchCheckChecked">
              Default Card
            </label>
          </div>
        </div>

        <div className="C-1">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </li>

            <li>
              5535&nbsp;&nbsp;<span>####</span>&nbsp;&nbsp;<span>####</span>
              &nbsp;&nbsp;2296
            </li>
            <li>
              <div id="card">Master Card</div>
              <div>
                <img src={master}></img>
              </div>
            </li>
          </ul>
          <div class="form-check form-switch Ch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label c-4" for="flexSwitchCheckChecked">
              Default Card
            </label>
          </div>
        </div>

        <div className="C-1">
        <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </li>

            <li>
              5535&nbsp;&nbsp;<span>####</span>&nbsp;&nbsp;<span>####</span>
              &nbsp;&nbsp;2296
            </li>
            <li>
              <div id="card">Master Card</div>
              <div>
                <img src={master}></img>
              </div>
            </li>
          </ul>

          <div id="addcard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            Add New Credit Card
          </div>
        </div>
      </div>
    </div>
  );
}
