export default {
  functional: true,
  props: {
    list: String,
    renderFn: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFn(h, ctx.props.list)
  }
}