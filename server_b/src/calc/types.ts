export type CalcRequestBody = {
  percent: number;
  numeric: number;
};
export type ErrorResponse = {
  statusCode?: number;
  message?: string;
};

export type SuccessResponse = {
  statusCode?: number;
  message: number | string;
};

export type ParamsType = CalcRequestBody;
