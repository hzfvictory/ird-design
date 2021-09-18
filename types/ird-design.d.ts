import Vue from "vue";

import { ElButton } from "./button";

export interface InstallationOptions {
  locale: any;
  size: string;
}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export class Button extends ElButton {}

export class EnhanceTable extends ElButton {}

export class InputNumber extends ElButton {}

export class WithSearch extends ElButton {}

export class Select extends ElButton {}

export class Upload extends ElButton {}

export class Modal extends ElButton {}

export class Icon extends ElButton {}
