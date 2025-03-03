import { h, defineComponent, ref, PropType, inject } from 'vue'
import { render } from '../../_utils'
import { TmNode, treeInjectionKey } from './interface'

export default defineComponent({
  name: 'TreeNodeContent',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: Boolean,
    selected: Boolean,
    onClick: Function as PropType<(e: MouseEvent) => void>,
    onDragstart: Function as PropType<(e: DragEvent) => void>,
    tmNode: {
      type: Object as PropType<TmNode>,
      required: true
    }
  },
  setup (props) {
    const { renderLabelRef, renderPrefixRef, renderSuffixRef } =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inject(treeInjectionKey)!
    const selfRef = ref<HTMLElement | null>(null)
    function doClick (e: MouseEvent): void {
      const { onClick } = props
      if (onClick) onClick(e)
    }
    function handleClick (e: MouseEvent): void {
      doClick(e)
    }
    return {
      selfRef,
      renderLabel: renderLabelRef,
      renderPrefix: renderPrefixRef,
      renderSuffix: renderSuffixRef,
      handleClick
    }
  },
  render () {
    const {
      clsPrefix,
      checked = false,
      selected = false,
      renderLabel,
      renderPrefix,
      renderSuffix,
      handleClick,
      onDragstart,
      tmNode: {
        rawNode,
        rawNode: { prefix, label, suffix }
      }
    } = this
    return (
      <span
        ref="selfRef"
        class={[`${clsPrefix}-tree-node-content`]}
        onClick={handleClick}
        draggable={onDragstart === undefined ? undefined : true}
        onDragstart={onDragstart}
      >
        {renderPrefix || prefix ? (
          <div class={`${clsPrefix}-tree-node-content__prefix`}>
            {renderPrefix
              ? renderPrefix({
                option: rawNode,
                selected,
                checked
              })
              : render(prefix)}
          </div>
        ) : null}
        <div class={`${clsPrefix}-tree-node-content__text`}>
          {renderLabel
            ? renderLabel({
              option: rawNode,
              selected,
              checked
            })
            : render(label)}
        </div>
        {renderSuffix || suffix ? (
          <div class={`${clsPrefix}-tree-node-content__suffix`}>
            {renderSuffix
              ? renderSuffix({
                option: rawNode,
                selected,
                checked
              })
              : render(suffix)}
          </div>
        ) : null}
      </span>
    )
  }
})
