import Vue from "vue";
import {
  Tooltip,
  Input,
  Table,
  Popconfirm,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Message,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Tooltip);
Vue.use(Input);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);

Message.install = () => {
  Vue.prototype.$message = Message;
};
