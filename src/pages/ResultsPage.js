import React from 'react';
import { useLocation } from 'react-router-dom';
import './Pages.css';

function ResultsPage() {
  const location = useLocation();
  const resultsData = location.state ? location.state.analysisData : null;

  if (!resultsData) {
    return (
      <div className="results-container no-results">
        <h2>Analysis Results</h2>
        <p>No results available. Please upload an X-ray image for analysis.</p>
      </div>
    );
  }

  const { prediction, confidenceScore } = resultsData; // please adjust it  based on your backend response structure

  return (
    <div className="results-container">
      <h2>Analysis Results</h2>
      <div className="result-card">
        <h3>Prediction:</h3>
        <p className={`prediction-text ${prediction ? prediction.toLowerCase().replace(/\s+/g, '-') : ''}`}>
          {prediction || 'Processing...'}
        </p>
      </div>

      <div className="result-card">
        <h3>Confidentiality Score:</h3>
        <p className="confidence-score">{(confidenceScore * 100)?.toFixed(2)}%</p>
        {confidenceScore < 0.7 && (
          <p className="low-confidence-warning">
            <i className="fas fa-exclamation-triangle warning-icon"></i>
            The confidence score is relatively low. These results should be interpreted with caution.
          </p>
        )}
      </div>

   
      {resultsData.additionalFindings && (
        <div className="result-card additional-findings">
          <h3>Additional Findings:</h3>
          <ul>
            {resultsData.additionalFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="action-buttons">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Back to Upload
        </button>
        {/* Option to view history if the user is logged in-----again use ur prefered login methode */}
        {/* <button className="view-history-button">View History</button> */}
      </div>
    </div>
  );
}

export default ResultsPage;