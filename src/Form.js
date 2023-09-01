import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const { handleSubmit, control } = useForm();
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orderId, setOrderId] = useState({});

  const notify = () => {
    toast("Başarıyla eklendi");
    console.log(orderId);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ post: data.id }));
  };


  useEffect(() => {
    axios("http://localhost:5282/api/Product").then(
      (res) => console.log(res.data)
      //setProducts(res.data)
    );

    axios("http://localhost:5282/api/Customer").then(
      (res) => console.log(res.data)
      //setCustomers(res.data),
    );
  }, []);

  return (
    <div>
      <div>
        <Stack sx={{ width: 300 }}>
          <Autocomplete
            id="product"
            options={top100Films.map((option) => option.title)}
            //top100Films.map((option) => option.title)
            //products
            renderInput={(params) => (
              <TextField {...params} label="Ürün Seçiniz" />
            )}
          />
        </Stack>
      </div>
      <div>
        <Stack sx={{ width: 300 }}>
          <Autocomplete
            id="customers"
            options={top100Films.map((option) => option.title)}
            //top100Films.map((option) => option.title)
            //customers
            renderInput={(params) => (
              <TextField {...params} label="Müşteri Seçiniz" />
            )}
          />
        </Stack>
      </div>
      <div>
        <TextField
          name="orderId"
          control={control}
          sx={{ width: 300 }}
          onChange={(e) => setOrderId(e.target.value)}
          label="Sipariş numarası giriniz.."
        >
          {" "}
        </TextField>
      </div>
      <div>
        <Button variant="contained" onClick={notify}>
          Ekle
        </Button>
        <div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

export default Form;
