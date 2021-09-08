export const generateData = () => {
  const data = [];
  const cities = [
    "三国演义",
    "⽔浒传",
    "⻄游记",
    "红楼梦",
    "周易",
    "诗经",
    "⻤⾕⼦",
    "孙⼦兵法",
    "史记",
  ];
  const pinyin = [
    "sanguo",
    "shuihu",
    "xiyouji",
    "honhlumeng",
    "zhouyi",
    "shiing",
    "guiguzi",
    "sunzibingfa",
    "shiji",
  ];
  cities.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      pinyin: pinyin[index],
      disabled: index % 4 === 0,
    });
  });
  return data;
};
