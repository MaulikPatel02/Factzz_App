import React from "react";
import "../css/Video_Call.css";

export default function Video_Call() {


  const tabledata =[
    {
      id:1,
      sr:"1",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
    {
      id:2,
      sr:"2",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
    {
      id:3,
      sr:"3",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
    {
      id:4,
      sr:"4",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
    {
      id:5,
      sr:"5",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
    {
      id:6,
      sr:"6",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
    {
      id:7,
      sr:"7",
      RequestedForm:"@User",
      RequestedTo:"@User",
      Amount:"$0.00",
      StartTime:"25 Aug 2022 12:48 PM",
      EndTime:"25 Aug 2022 09:49 PM",
      Status:"Ended",
      Action:'',
    },
  ]
  return (
    <div>
      <div className="videocall">
        <p>
          The list contain the call requests which made by you, it will contain
          the requests which you received from other users.
        </p>

        <div className="V-1">
          <table>
            <thead>
            <tr>
              <th>S.NO</th>
              <th>Requested Form</th>
              <th>Requested To</th>
              <th>Amount</th>
              <th>Scheculed at</th>
              <th>End Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {tabledata.map((data,i)=>{
               return(
                <tr key={i}>
                  <td>{data.sr}</td>
                  <td id="u-1">{data.RequestedForm}</td>
                  <td id="u-1">{data.RequestedTo}</td>
                  <td>{data.Amount}</td>
                  <td>{data.StartTime}</td>
                  <td>{data.EndTime}</td>
                  <td>{data.Status}</td>
                  <td>{data.Action}</td>               
                </tr>
               )
              })}                     
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
