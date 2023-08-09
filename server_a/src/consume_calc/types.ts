export type ErrorResponse = {
  statusCode?: number;
  message?: string;
};

export type SuccessResponse = {
  statusCode?: number;
  message: number | string;
};

export type RequestCalcPersent = {
  percent: number;
  numeric: number;
};

export type ResultCalcPercentSchema = {
  message: number;
};

export type PostParams = {
  percent?: number;
  numeric?: number;
};

export type SuccessReqest = ResultCalcPercentSchema;

export type ParamsType = RequestCalcPersent | SuccessReqest;
