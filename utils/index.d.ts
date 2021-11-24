import Vue from "vue";

// test
interface Options {
  key?: string;
  value: Array<any>;
}

export type PAGEPARAMS = string;
export type STARTTIME = string;
export type ENDTIME = string;
export type DATE_FORMAT = string;
export type DATE_TIME_FORMAT = string;

export function awaitWrap(promise: Function): void;

export function genID(length: number): void;

export function isEmail(email: string): void;

export function isInternetURL(url: string): void;

export function getBLen(str: string): void;

export function formatterNumber(num: string | number, val: number): void;

export function returnFloat(val: number, position: string | number): void;

export function handleFields(fields: any, key: string, options: Array<any> | Options): void;
