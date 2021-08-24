/* generated by Svelte v3.42.3 */
import { SvelteComponent, binding_callbacks, create_slot, detach, element, flush, get_all_dirty_from_scope, get_slot_changes, init, insert, safe_not_equal, set_custom_element_data, transition_in, transition_out, update_slot_base } from "svelte/internal";
import { createEventDispatcher, onMount } from 'svelte';
function create_fragment(ctx) {
    let rux_icon_warning;
    let current;
    const default_slot_template = /*#slots*/ ctx[5].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
    return {
        c() {
            rux_icon_warning = element("rux-icon-warning");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(rux_icon_warning, "color", /*color*/ ctx[0]);
            set_custom_element_data(rux_icon_warning, "size", /*size*/ ctx[1]);
        },
        m(target, anchor) {
            insert(target, rux_icon_warning, anchor);
            if (default_slot) {
                default_slot.m(rux_icon_warning, null);
            }
            /*rux_icon_warning_binding*/ ctx[6](rux_icon_warning);
            current = true;
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[4], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null), null);
                }
            }
            if (!current || dirty & /*color*/ 1) {
                set_custom_element_data(rux_icon_warning, "color", /*color*/ ctx[0]);
            }
            if (!current || dirty & /*size*/ 2) {
                set_custom_element_data(rux_icon_warning, "size", /*size*/ ctx[1]);
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
                detach(rux_icon_warning);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_icon_warning_binding*/ ctx[6](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { color = undefined } = $$props;
    let { size = undefined } = $$props;
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
    function rux_icon_warning_binding($$value) {
        binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(2, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('color' in $$props)
            $$invalidate(0, color = $$props.color);
        if ('size' in $$props)
            $$invalidate(1, size = $$props.size);
        if ('$$scope' in $$props)
            $$invalidate(4, $$scope = $$props.$$scope);
    };
    return [color, size, __ref, getWebComponent, $$scope, slots, rux_icon_warning_binding];
}
class RuxIconWarning extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, { color: 0, size: 1, getWebComponent: 3 });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get color() {
        return this.$$.ctx[0];
    }
    set color(color) {
        this.$$set({ color });
        flush();
    }
    get size() {
        return this.$$.ctx[1];
    }
    set size(size) {
        this.$$set({ size });
        flush();
    }
    get getWebComponent() {
        return this.$$.ctx[3];
    }
}
export default RuxIconWarning;
//# sourceMappingURL=RuxIconWarning.js.map