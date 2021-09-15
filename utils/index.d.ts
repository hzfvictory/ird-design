import Vue from "vue";

// test
interface Options {
  locale: any;
  size: string;
}

export type PAGEPARAMS = string;
export type STARTTIME = string;
export type ENDTIME = string;
export type DATE_FORMAT = string;
export type DATE_TIME_FORMAT = string;

export function awaitWrap(vue: typeof Vue, options: Options): void;

export function returnFloat(vue: typeof Vue, options: Options): void;

export function genID(vue: typeof Vue, options: Options): void;

export function isEmail(vue: typeof Vue, options: Options): void;

export function isInternetURL(vue: typeof Vue, options: Options): void;

export function getBLen(vue: typeof Vue, options: Options): void;

export function formatterNumber(vue: typeof Vue, options: Options): void;

export function changeFields(vue: typeof Vue, options: Options): void;
