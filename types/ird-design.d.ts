import Vue from "vue";

import { ElButton } from "./button";

export interface InstallationOptions {
  locale: any;
  size: string;
}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export class Button extends ElButton {}

export class EnhanceTable extends ElButton {}

export class IrdInputNumber extends ElButton {}

export class WithSearch extends ElButton {}

export class IrdSelect extends ElButton {}

export class IrdUpload extends ElButton {}

export class IrdModal extends ElButton {}

export class Icon extends ElButton {}
