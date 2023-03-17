import { createAsyncThunk } from "@reduxjs/toolkit";
import service from "../axiosservice";


import { Error, HTTPMethod, RequestModel } from "../types";

export const createRequestThunk = <Req extends RequestModel | undefined, Res>(method: HTTPMethod, stateKey: string, url: string) => createAsyncThunk(stateKey, async (request: Req, { rejectWithValue }) => {
  try {
    const response = await service[method]<Res>(`${url}${request?.path ? request.path : ""}`, { ...request });
    return response.data as Res;
  }
  catch (err: any) {
    return rejectWithValue(err as Error);
  }
});

export const createInitialApiState = <T>(endpoints: string[]): T => {
  const initialState: any = {};

  endpoints.forEach(endpoint => {
    initialState[endpoint] = {};
  });

  return initialState as T;
};