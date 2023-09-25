import React, { useState } from "react";

const Year = () => {
  // Set up state to store user data
  const [userData, setUserData] = useState([]);

  const createTask = async (
    userName,
    phoneNumber,
    fatherName,
    year,
    amount
  ) => {
    try {
      // Your existing createTask logic here
      // Be sure to update 'userData' based on the result

      // For this example, let's simulate updating 'userData'
      const newUser = {
        userName,
        phoneNumber,
        fatherName,
        years: [
          {
            year,
            months: [
              {
                date: new Date().getDate(),
                month: new Date().getMonth() + 1,
                amount,
              },
            ],
          },
        ],
      };

      setUserData((prevData) => [...prevData, newUser]);
    } catch (error) {
      // Handle errors
      console.error("Error creating task:", error);
    }
  };

  // Define a function to handle a form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const fatherName = e.target.fatherName.value;
    const year = e.target.year.value;
    const amount = parseFloat(e.target.amount.value); // Parse the amount as a number

    // Call createTask with form input data
    createTask(userName, phoneNumber, fatherName, year, amount);

    // Reset the form fields
    e.target.reset();
  };

  return (
    <div>
      <h1>Create a Task</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          User Name:
          <input type="text" name="userName" required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" required />
        </label>
        <br />
        <label>
          Father's Name:
          <input type="text" name="fatherName" required />
        </label>
        <br />
        <label>
          Year:
          <input type="number" name="year" required />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" name="amount" step="0.01" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>User Data</h2>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            <strong>User Name:</strong> {user.userName}
            <br />
            <strong>Phone Number:</strong> {user.phoneNumber}
            <br />
            <strong>Father's Name:</strong> {user.fatherName}
            <br />
            <strong>Years:</strong>
            <ul>
              {user.years.map((yearData, yearIndex) => (
                <li key={yearIndex}>
                  <strong>Year:</strong> {yearData.year}
                  <br />
                  <strong>Months:</strong>
                  <ul>
                    {yearData.months.map((month, monthIndex) => (
                      <li key={monthIndex}>
                        <strong>Date:</strong> {month.date}
                        <br />
                        <strong>Month:</strong> {month.month}
                        <br />
                        <strong>Amount:</strong> {month.amount}
                        <br />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Year;
