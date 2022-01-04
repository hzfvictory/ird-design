import Clipboard from "clipboard";
import Notify from "element-ui/lib/notification";

export default {
  methods: {
    copy(ev, text) {
      const clipboard = new Clipboard(ev.target, { text: () => text });
      clipboard.on("success", (e) => {
        console.log("复制成功");
        Notify({
          title: "复制成功",
          type: "success",
          duration: 2000,
          customClass: "ird-notification",
        });
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        // 不支持复制
        console.log("该浏览器不支持自动复制");
        Notify({
          title: "该浏览器不支持自动复制",
          type: "error",
          duration: 2000,
          customClass: "ird-notification",
        });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.onClick(ev);
    },
  },
};
