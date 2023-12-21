import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const BitcoinkeRupiah = () => {
  const [jumlahBitcoin, setBitcoin] = useState("");
  const [jumlahRupiah, setRupiah] = useState("");

  const handleConvert = async () => {
    try {
      const response = await fetch(`https://blockchain.info/ticker`);
      const data = await response.json();
      const bitcoinPriceInUSD = data.USD.last;

      const rupiahValue = jumlahBitcoin * bitcoinPriceInUSD * 14000;
      setRupiah(rupiahValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Konversi Bitcoin ke Rupiah</h1>
      <p style={{ fontWeight: "bold" }}>Kurs 1 USD = 14,000 IDR</p>
      <input
        type="number"
        value={jumlahBitcoin}
        onChange={(e) => setBitcoin(e.target.value)}
      />

      <Button variant="primary" onClick={handleConvert}>
        Convert
      </Button>
      {jumlahRupiah && (
        <h2 style={{ fontWeight: "bold" }}>
          BTC {jumlahBitcoin} = Rp {jumlahRupiah.toFixed(2)}
        </h2>
      )}
    </div>
  );
};

export default BitcoinkeRupiah;
