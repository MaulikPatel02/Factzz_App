import React from "react";
import "../css/Wallet.css";

export default function Wallet() {

  const tabledata =[
    {
      id:1,
      Status:"Paid",
      Amount:"+$18.00",
      ServiceFee:"$2.00",
      Amount:"$0.00",
      Type:"$0.00",
      from:"@user",
      ID:"WPP-865520501",
    },
    {
      id:2,
      Status:"Paid",
      Amount:"+$18.00",
      ServiceFee:"$2.00",
      Amount:"$0.00",
      Type:"$0.00",
      from:"@user",
      ID:"WPP-865520501",
    },
    {
      id:3,
      Status:"Paid",
      Amount:"+$18.00",
      ServiceFee:"$2.00",
      Amount:"$0.00",
      Type:"$0.00",
      from:"@user",
      ID:"WPP-865520501",
    },
    {
      id:4,
      Status:"Paid",
      Amount:"+$18.00",
      ServiceFee:"$2.00",
      Amount:"$0.00",
      Type:"$0.00",
      from:"@user",
      ID:"WPP-865520501",
    },
    {
      id:5,
      Status:"Paid",
      Amount:"+$18.00",
      ServiceFee:"$2.00",
      Amount:"$0.00",
      Type:"$0.00",
      from:"@user",
      ID:"WPP-865520501",
    },
    {
      id:6,
      Status:"Paid",
      Amount:"+$18.00",
      ServiceFee:"$2.00",
      Amount:"$0.00",
      Type:"$0.00",
      from:"@user",
      ID:"WPP-865520501",
    },
  ]

  return (
    <div>
      <div className="wallet">
        <div className="w-1">
          <div className="w1-1">
            <div className="w11-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-wallet-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
              </svg>
            </div>

            <div className="w11-2">
              <h5>Wallet Balance</h5>
              <h6>$1000</h6>
            </div>
          </div>
          <div className="w1-1">
            <div className="w11-1 w111-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person-badge-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
              </svg>
            </div>

            <div className="w11-2">
              <h5>Referral Balance</h5>
              <h6>$250</h6>
            </div>
          </div>
          <div className="w1-1 w2">
            <div className="w11-1 w111-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </div>

            <div className="w11-2">
              <h5> Add Wallet Amount</h5>
             
            </div>
          </div>
          <div className="w1-1 w2">
            <div className="w11-1 w111-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
              </svg>
            </div>

            <div className="w11-2">
              <h5>Withdraw Amount</h5>
             
            </div>
          </div>
        </div>

        <div className="w-2">
        <div className="V-1 VV-1">
          <table>
            <thead>
            <tr>
              <th>Status</th>
              <th>Amount</th>
              <th>Service Fee</th>
              <th>Amount</th>
              <th>Type</th>
              <th>from</th>
              <th>ID</th>
             
            </tr>
            </thead>
            <tbody>
            {tabledata.map((data,i)=>{
               return(
                <tr key={i}>
                  <td>{data.Status}</td>
                  <td id="u-1">{data.Amount}</td>
                  <td id="u-1">{data.ServiceFee}</td>
                  <td>{data.Amount}</td>
                  <td>{data.Type}</td>
                  <td>{data.from}</td>
                  <td>{data.ID}</td>
                                
                </tr>
               )
              })}                     
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}
