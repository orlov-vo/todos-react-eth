export function createElemProps(bem, props) {
  const mod = {}
  mod[props.mod] = true

  const inner = props.name || props.children
  const elemProps = {
    className: bem(mod),
    onClick: props.onClick,
  }

  return { elemProps, inner }
}

export default createElemProps
