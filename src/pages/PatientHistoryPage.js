import React from 'react';
import './Pages.css';

function PatientHistoryPage() {
  // again dear backend dev, after integration it should fetch patient history 
  const patientHistory = [
    { id: 1, date: '2025-04-15', filename: 'scan_1.jpg', result: 'No significant findings', confidentialityScore: 0.95 },
    { id: 2, date: '2025-03-20', filename: 'scan_2.png', result: 'Possible early-stage nodule', confidentialityScore: 0.88 },
    // ...uk... more history items
  ];

  return (
    <div className="history-container">
      <h2>Patient History</h2>
      {patientHistory.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Filename</th>
              <th>Result</th>
              <th>Confidentiality Score</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {patientHistory.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.filename}</td>
                <td>{item.result}</td>
                <td>{(item.confidentialityScore * 100).toFixed(2)}%</td>
                <td><button className="view-button">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PatientHistoryPage;