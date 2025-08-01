import React from 'react';

function Welcome({ onLogout }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f4f6',
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>Welcome User!</h2>
        <p style={{ marginBottom: '20px' }}>You are successfully logged in.</p>
        <button
          onClick={onLogout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
