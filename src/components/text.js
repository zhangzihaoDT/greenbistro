/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
//使用Styled样式化组件，从而优化出<h1>,<h2>的标签
const Text = ({ variant = "heading", ...props }) => (
  <Styled.p
    {...props}
    sx={{
      m: 0,
      variant: `text.${variant}`,
    }}
  />
)

export default Text
