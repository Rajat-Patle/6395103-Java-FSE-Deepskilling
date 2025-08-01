import React from 'react';

function Signup({ onSignup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup();
  };

  return (
            <div style={{
                      minHeight: '100vh',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#f3f4f6',
                    }}>
      <form
        onSubmit={handleSubmit}
        style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  width: '300px',
                  textAlign: 'center',
          }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Signup</h2>

        <input
          type="text"
          placeholder="Username"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
