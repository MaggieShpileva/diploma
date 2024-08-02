import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstanse } from "../../axiosInstance";

export enum Status {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

type ProductState = {
  data: any[];
  filters: {
    size: string[];
    priceStart: string;
    priceEnd: string;
  };
  status: Status;
};

const initialState: ProductState = {
  data: [],
  filters: {
    size: [],
    priceStart: "",
    priceEnd: "",
  },
  status: Status.IDLE,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getFilters: (state) => {
    //   // state.filters = ;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = Status.LOADING;
      console.log(state.status);
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = Status.ERROR;
      console.log(state.status);
    });
  },
});

export const getProducts = createAsyncThunk("sneakers", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});
