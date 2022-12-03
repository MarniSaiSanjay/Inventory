import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Form, Button } from "./excel.styles";
import axios from "axios";
const item = {
  name: "kj",
  amount: 23,
  description: "lorem3",
};
export default function Excel() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const readExcel = (file) => {
    if (
      file &&
      (file.name.split(".")[1] === "xlsx" || file.name.split(".")[1] === "xls")
    ) {
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const wb = XLSX.read(bufferArray, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          resolve(data);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
      setError(false);
      promise.then((data) => {
        setItems(data);
        console.log(data)
      });
    } else {
      setError(true);
    }
  };

  const handleExcelFormSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    if (localStorage.getItem("inventoryAppToken")) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "inventory-app-token": localStorage.getItem("inventoryAppToken"),
        },
      };

      // console.log("output => ", items);
      // axios
      //   .get("http://localhost:3500/api/purchases", options)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // items.forEach(
      axios
        .post("http://localhost:3500/api/purchases", item, options)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
      // );
    }
  };

  return (
    <Form onSubmit={handleExcelFormSubmit}>
      <input
        className="inputfile"
        type="file"
        id="file"
        accept=".xls,.xlsx"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      {error && <span style={{ color: "red" }}>Choose valid file type!!</span>}
      <Button submitButton type="submit">
        Upload Excel Sheet
      </Button>
    </Form>
  );
}
