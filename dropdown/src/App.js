import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const App = () => {
  const [jenjang, setJenjang] = useState("");
  const [tingkatan, setTingkatan] = useState("");

  const pilihanJenjang = [
    "Pendidikan Pra Sekolah",
    "Pendidikan Dasar",
    "Pendidikan Menengah",
    "Pendidikan Tinggi",
  ];

  const pilihanTingkatan = {
    "Pendidikan Pra Sekolah": ["PAUD", "TK", "RA"],
    "Pendidikan Dasar": ["SD", "MI", "SMP", "MTs"],
    "Pendidikan Menengah": ["SMA", "MA", "SMK"],
    "Pendidikan Tinggi": [
      "D3 Diploma",
      "S1/D4 Sarjana",
      "S2 Magister",
      "S3 Doktoral",
    ],
  };

  const perubahanJenjang = (selectedJenjang) => {
    setJenjang(selectedJenjang);
  };

  const perubahanTingkatan = (selectedTingkatan) => {
    setTingkatan(selectedTingkatan);
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ width: "300px", height: "50px" }}
          >
            {jenjang || "Pilih Jenjang Pendidikan"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {pilihanJenjang.map((option, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => perubahanJenjang(option)}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="danger"
            id="dropdown-basic"
            style={{ width: "300px", height: "50px" }}
          >
            {tingkatan || "Pilih Tingkatan Pendidikan"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {!jenjang && (
              <Dropdown.Item disabled>
                Pilih Jenjang terlebih dahulu
              </Dropdown.Item>
            )}
            {pilihanTingkatan[jenjang] &&
              pilihanTingkatan[jenjang].map((option, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => perubahanTingkatan(option)}
                >
                  {option}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default App;
