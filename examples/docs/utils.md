## utils 公共方法库

```
import { DATE_FORMAT, formatterNumber } from '@ird/design/utils';
```

#### 常量

DATE_FORMAT:标准日期格式，YYYY-MM-DD

DATE_TIME_FORMAT:标准时间格式，YYYY-MM-DD HH:mm:ss

#### API

awaitWrap:捕获错误

genID:生成唯一 id

isEmail:匹配邮箱

isInternetURL:匹配 InternetURL

getBLen:查看文字的长度 一个文字抵两位数字

formatterNumber:数字千位一个逗号

#### 正则表达式

使用

```
import {Rules, genID} from '@ird/design/utils';
const { email } = Rules;
```

支持的正则有：

```
thousandNumReg: /^(-)?\d{1,3}(,\d{3})+(.\d+)?$/,// 千分位正则
phoneReg: /^1\d{10}$/,// 手机号正则
emojiReg: /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/,// emoji表情的正则
```
