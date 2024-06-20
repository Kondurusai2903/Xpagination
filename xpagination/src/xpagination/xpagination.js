import React, { useEffect, useState } from "react";
import "./xpagination.css";
const Xpagination = () => {
  const [apidata, setApidata] = useState([]);
  const [loading, setLoading] = useState(1);
  const API =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const res = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setApidata(data);
    } catch (err) {
      alert("the apidata not loaded ");
    }
  };
  useEffect(() => {
    res();
  }, []);
  console.log(apidata, "the data stored");
  const handleIncrement = () => {
    if (loading < 5) {
      setLoading(loading + 1);
    } else {
      alert("you can't increment futhur");
    }
  };
  const handleDecrement = () => {
    if (loading > 1) {
      setLoading(loading - 1);
    } else {
      alert("you can't decrement futhur");
    }
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        <tbody>
          {apidata.map((val, ind) =>
            ind >= loading * 10 - 10 && ind < loading * 10 ? (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.role}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
      <center>
        <button onClick={() => handleDecrement()}>Previous</button>
        <button>{loading}</button>
        <button onClick={() => handleIncrement()}>Next</button>
      </center>
    </div>
  );
};

export default Xpagination;
