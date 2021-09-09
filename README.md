## 介绍

@ird/design 是源于日常中后台系统开发不断的积累，如其名一样，让 element 使用更加得心应手，实现业务的快速迭代。其中包含一部分的对 element 组件深度封装，一些高频次自定义业务组件，和一些常用方法库的封装，支持按需打包。

## 使用文档

[文档地址](http://irdd.jing999.cn:9999): [http://irdd.jing999.cn:9999](http://irdd.jing999.cn:9999), 文档较简陋待完善。

## 安装

@ird/design 是一个多包的项目，组件与方法分离，依赖于 vue 环境与 element 组件库，支持 treeShaking。

**安装包**

```
npm i @ird/design --save
# yarn add @ird/design
```

## 使用

使用包中的组件

```
import { WithSearch } from '@ird/design';
```

使用包中的方法

```
import { DATE_FORMAT, formatterNumber } from '@ird/design/utils';
```
