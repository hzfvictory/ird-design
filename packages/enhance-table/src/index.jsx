import table from "@/mixins/table.mixins";
import { TableColumn, Button, Pagination, Popconfirm } from "element-ui";

export default {
  name: "EnhanceTable",
  components: {
    [TableColumn.name]: TableColumn,
    [Popconfirm.name]: Popconfirm,
    [Button.name]: Button,
    [Pagination.name]: Pagination,
  },
  mixins: [table],
  props: {
    otherTableParams: {
      // 设置table其他参数
      type: Object,
      default: function () {
        return {};
      },
    },
    otherPaginationParams: {
      // 设置分页其他参数
      type: Object,
      default: function () {
        return {};
      },
    },
    tableColumn: {
      // table的column
      type: Array,
      default: function () {
        return [];
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    irdSize() {
      return this.size || this.$IRDD?.size;
    },
  },
  methods: {
    // 静态方法
    tableRef() {
      return this.$refs["tableRef"];
    },
    handleButtons(item, record) {
      // 处理操作部分按钮 -> 可以在外面自定义，必须是jsx
      if (item.handleButtons) return item.handleButtons(record);

      return (
        !!item.list.length &&
        item.list.map((item) => {
          if (item.confirm) {
            return (
              <el-popconfirm
                icon="el-icon-info"
                iconColor="#f56c6c"
                title={item.confirmTip || "是否继续操作"}
                on-onConfirm={() => item.cb && item.cb(record)}
                scopedSlots={{
                  reference: () => {
                    return (
                      <el-button
                        disabled={item.disabled}
                        style={item.styles}
                        icon={item.icon}
                        type="text"
                        size={this.irdSize}
                      >
                        {item.title}
                      </el-button>
                    );
                  },
                }}
              />
            );
          }

          return (
            <el-button
              disabled={item.disabled}
              key={item.title}
              style={item.styles}
              icon={item.icon}
              type="text"
              size={this.irdSize}
              onClick={() => item.cb && item.cb(record)}
            >
              {item.title}
            </el-button>
          );
        })
      );
    },

    // handleCurrentChange(val) {
    //   this.$emit('currentChange', val);
    // },
  },
  mounted() {},
  render() {
    const {
      tableOptions,
      paginationOptions,
      paginationOptionsMethod,
      tableOptionsMethod,
      otherTableParams,
      otherPaginationParams,
      tableColumn,
      multiple,
    } = this;

    return (
      <div class={"ird-table"}>
        <el-table
          ref={"tableRef"}
          {...{
            props: {
              size: this.irdSize,
              ...tableOptions,
              ...otherTableParams.props,
            },
            on: {
              ...tableOptionsMethod,
              ...otherTableParams.on,
            },
          }}
        >
          {/* table多选 */}
          {multiple && (
            <el-table-column type="selection" width="55" fixed={"left"} />
          )}
          {/* table列表 */}
          {tableColumn.map((item) => {
            if (item.type === "button") {
              // 操作部分
              return (
                <el-table-column
                  {...{
                    props: {
                      label: item.label || "操作",
                      width: item.width || "88",
                      fixed: item.fixed || "right",
                      ...item,
                    },
                    scopedSlots: {
                      default: ({ row }) => {
                        return this.handleButtons(item, row);
                      },
                    },
                  }}
                />
              );
            }
            return (
              <el-table-column
                {...{
                  props: {
                    key: item.prop,
                    ...item,
                  },
                  // 自定义的渲染方式，拓展性
                  scopedSlots: {
                    default: ({ row, $index }) => {
                      return item.render
                        ? item.render(row[item.prop], row, $index, item.prop)
                        : row[item.prop];
                    },
                  },
                }}
              />
            );
          })}
        </el-table>
        {/*分页*/}
        <el-pagination
          {...{
            class: paginationOptions.class, // 支持拓展
            props: {
              ...paginationOptions,
              ...otherPaginationParams.props,
            },
            on: {
              ...paginationOptionsMethod,
            },
          }}
        />
      </div>
    );
  },
};
