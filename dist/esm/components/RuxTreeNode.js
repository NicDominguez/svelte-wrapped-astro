/* generated by Svelte v3.42.3 */
import { SvelteComponent, binding_callbacks, create_slot, detach, element, flush, get_all_dirty_from_scope, get_slot_changes, init, insert, listen, safe_not_equal, set_custom_element_data, transition_in, transition_out, update_slot_base } from "svelte/internal";
import { createEventDispatcher, onMount } from 'svelte';
function create_fragment(ctx) {
    let rux_tree_node;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[8].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);
    return {
        c() {
            rux_tree_node = element("rux-tree-node");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(rux_tree_node, "expanded", /*expanded*/ ctx[0]);
            set_custom_element_data(rux_tree_node, "selected", /*selected*/ ctx[1]);
        },
        m(target, anchor) {
            insert(target, rux_tree_node, anchor);
            if (default_slot) {
                default_slot.m(rux_tree_node, null);
            }
            /*rux_tree_node_binding*/ ctx[9](rux_tree_node);
            current = true;
            if (!mounted) {
                dispose = listen(rux_tree_node, "rux-tree-node-selected", /*onEvent*/ ctx[3]);
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[7], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null), null);
                }
            }
            if (!current || dirty & /*expanded*/ 1) {
                set_custom_element_data(rux_tree_node, "expanded", /*expanded*/ ctx[0]);
            }
            if (!current || dirty & /*selected*/ 2) {
                set_custom_element_data(rux_tree_node, "selected", /*selected*/ ctx[1]);
            }
        },
        i(local) {
            if (current)
                return;
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching)
                detach(rux_tree_node);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_tree_node_binding*/ ctx[9](null);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { expanded = undefined } = $$props;
    let { selected = undefined } = $$props;
    const setExpanded = (...args) => __ref.setExpanded(...args);
    const setSelected = (...args) => __ref.setSelected(...args);
    const getWebComponent = () => __ref;
    onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(2, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_tree_node_binding($$value) {
        binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(2, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('expanded' in $$props)
            $$invalidate(0, expanded = $$props.expanded);
        if ('selected' in $$props)
            $$invalidate(1, selected = $$props.selected);
        if ('$$scope' in $$props)
            $$invalidate(7, $$scope = $$props.$$scope);
    };
    return [
        expanded,
        selected,
        __ref,
        onEvent,
        setExpanded,
        setSelected,
        getWebComponent,
        $$scope,
        slots,
        rux_tree_node_binding
    ];
}
class RuxTreeNode extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            expanded: 0,
            selected: 1,
            setExpanded: 4,
            setSelected: 5,
            getWebComponent: 6
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get expanded() {
        return this.$$.ctx[0];
    }
    set expanded(expanded) {
        this.$$set({ expanded });
        flush();
    }
    get selected() {
        return this.$$.ctx[1];
    }
    set selected(selected) {
        this.$$set({ selected });
        flush();
    }
    /** Sets the expanded state */
    get setExpanded() {
        return this.$$.ctx[4];
    }
    /** Sets the selected state */
    get setSelected() {
        return this.$$.ctx[5];
    }
    get getWebComponent() {
        return this.$$.ctx[6];
    }
}
export default RuxTreeNode;
//# sourceMappingURL=RuxTreeNode.js.map