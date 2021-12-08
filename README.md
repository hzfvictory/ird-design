## 介绍

irdd 是源于日常中后台系统开发不断的积累，让 element 使用更加得心应手，实现业务的快速迭代。其中包含一部分的对 element 组件深度封装，一些高频次自定义业务组件，和一些常用方法库的封装，支持按需打包。

## 使用文档

[文档地址](http://irdd.jing9999.cn:9999), 文档快速完善中...

## 安装

irdd 是一个多包的项目，组件与方法分离，依赖于 vue 环境与 element 组件库，支持 treeShaking。 [img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy96RUNBZGdqWGZhcTlEalVnNnQybUhUVmROVGVlS2M1bXc4WU5qellTU2ljOGliZzdtZE11ZzhLM1U1eGliUDh0S3VYNGY4YmZYaWJkeVFCTFZnaWNsNzVIQnJBLzY0MA?x-oss-process=image/format,png)

**安装包**

```
npm i irdd --save
# yarn add irdd
```

## 使用

使用包中的组件

```
import { WithSearch } from 'irdd';
```

使用包中的方法

```
import { DATE_FORMAT, formatterNumber } from 'irdd/utils';
```
