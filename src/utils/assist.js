export const oneOf = (value, validList = []) => {
  return validList.includes(value) || !value
}
export const prefixCls = 'ird';