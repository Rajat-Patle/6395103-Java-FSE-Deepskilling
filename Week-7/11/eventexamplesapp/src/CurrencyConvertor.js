import React from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = React.useState('');
  const [currency, setCurrency] = React.useState('Euro'); // Optional if you want to show it

  const handleSubmit = (e) => {
    e.preventDefault();

    const euroRate = 0.011;
    const rupeeAmount = parseFloat(rupees);

    if (isNaN(rupeeAmount)) {
      alert("Please enter a valid number.");
      return;
    }

    const converted = rupeeAmount * euroRate;
    alert(`₹${rupeeAmount} = €${converted.toFixed(2)} (${currency})`);

    // Optional: reset form
    setRupees('');
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Converter!!!</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Amount: &nbsp;
            <input
              type="number"
              placeholder="Enter amount in Rupees"
              value={rupees}
              onChange={(e) => setRupees(e.target.value)}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Currency: &nbsp;
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
