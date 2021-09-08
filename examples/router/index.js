import Vue from "vue";
import Router from "vue-router";
import navConf from "doc/nav.config.json";

Vue.use(Router);

let routes = [];
Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header]);
});

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === "pages") {
        route.component = (r) =>
          require.ensure([], () => r(require(`doc/pages/${route.name}`)));
        return;
      }
      route.component = (r) =>
        require.ensure([], () => r(require(`doc/docs/${route.name}`)));
    }
  });
};
addComponent(routes);

let onlineRun = {
  component: () => import("../components/OnlineRun/index"),
  hidden: true,
  name: "OnlineRun",
  path: "/run",
  desc: "在线运行",
};
routes.push(onlineRun);

const scrollBehavior = function (to, from, savedPosition) {
  // 临时解决办法
  return new Promise(() => {
    let newVal = this.app._route.hash;
    let container = document.getElementsByClassName("page-container")[0];
    if (newVal) {
      newVal = decodeURI(newVal); // url 解码
      let hash = newVal.substring(1);
      let anchor = document.getElementById(hash); // 获取元素
      if (!anchor) return;
      container.scroll(0, anchor.offsetTop);
      // anchor.scrollIntoView(true);
    } else {
      container.scroll(0, 0);
    }
  });
};
const hashPath = function () {
  // 处理 hash 锚点跳转路径问题
  setTimeout(() => {
    let href = window.location.href;
    let lastIndex = href.lastIndexOf("#");
    let origin =
      lastIndex === href.indexOf("#") ? href : href.substring(0, lastIndex);
    let doc = queryAllIds();
    // 遍历每一个对象
    for (let i = 0; i < doc.length; i++) {
      let _dc = doc[i];
      let id = _dc.getAttribute("id");
      _dc.getElementsByTagName("a")[0]?.setAttribute("href", `${origin}#${id}`);
    }
  }, 20);
};

const queryAllIds = function () {
  const getElementsByTagName = (ele) =>
    window.document.getElementsByTagName(ele);
  let eleAry = ["h3", "h4", "h5", "h6"]; // markdown-loader 能设置能跳转的标签
  let doc = [];
  eleAry.map((ele) => {
    doc.push(...getElementsByTagName(ele));
  });
  return doc;
};

// __dirname
export default new Router({
  mode: "hash",
  base: "/1.0.0/",
  routes: routes,
  scrollBehavior,
  hashPath: { "$route.path": hashPath },
  queryAllIds,
});
