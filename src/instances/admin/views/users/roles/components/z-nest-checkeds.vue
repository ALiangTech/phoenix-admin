<script lang="ts">
import { h, ref } from 'vue';
import { NCheckbox } from 'naive-ui';

interface Checked {
  [propName: string]: boolean;
}

interface DataItem {
  label: string;
  value: string;
  checked: string;
  parentValues: any[]; // 所有的父级元素值
  childrenValues: any[]; // 所有子级元素值
  children: DataItem[];
}
// 如果勾选了子级 那么父级 也会被勾选 改组件只满足
// 如果父级 取消了勾选 并且子级有勾选的 那么 子级应该取消勾选

function setChildrenParentValues(
  data: DataItem[],
  parentDataItem: DataItem | null,
) {
  return data.map(item => {
    if (!Array.isArray(item?.parentValues)) {
      item.parentValues = [];
    }
    if (parentDataItem) {
      item.parentValues.push(parentDataItem.value!);
      item.parentValues = item.parentValues.concat(parentDataItem.parentValues);
    }
    item.children = setChildrenParentValues(item.children, item);
    return item;
  });
}
function getChildChildrenValues(data: DataItem[]) {
  const temp: string[] = [];
  data.forEach(item => {
    temp.push(item.value, ...getChildChildrenValues(item.children));
  });
  return temp;
}
function setChildChildrenValues(data: DataItem[]) {
  return data.map(item => {
    item.childrenValues = getChildChildrenValues(item.children);
    item.children = setChildChildrenValues(item.children);
    return item;
  });
}
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const data = props.data as DataItem[];
    setChildrenParentValues(data, null);
    setChildChildrenValues(data);
    const checked = ref<Checked>({});
    function createCheckedVnode(data: DataItem[]): any[] {
      return data.map((item, index) => {
        return h(
          'div',
          {
            class: `flex  border-blue  border-l-1 border-r-0 ${
              index > 0 ? 'border-t-1' : 'border-t-0'
            } border-b-0 border-solid  px-1`,
          },
          [
            h('div', { class: 'flexCenter' }, [
              h(
                NCheckbox,
                {
                  checked: !!checked.value[item.value],
                  onUpdateChecked: v => {
                    const temp: any = {};
                    if (v) {
                      // 如果是选中 那么父级也应该选中
                      item.parentValues.forEach(key => {
                        temp[key] = true;
                      });
                    } else {
                      // 如果是取消 那么子级也应该取消
                      item.childrenValues.forEach(key => {
                        temp[key] = false;
                      });
                    }
                    checked.value = {
                      ...checked.value,
                      ...temp,
                      [item.value]: v,
                    };
                    emit('update:modelValue', checked.value);
                  },
                },
                {
                  default: () => item.label,
                },
              ),
            ]),
            h('div', { class: 'flex-1' }, createCheckedVnode(item.children)),
          ],
        );
      });
    }
    return () => {
      return h(
        'div',
        { class: 'border-1 border-blue border-solid border-l-0' },
        createCheckedVnode(data),
      );
    };
  },
};
</script>
