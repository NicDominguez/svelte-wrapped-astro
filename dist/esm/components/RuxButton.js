/* generated by Svelte v3.42.3 */
import { SvelteComponent, binding_callbacks, create_slot, detach, element, flush, get_all_dirty_from_scope, get_slot_changes, init, insert, safe_not_equal, set_custom_element_data, transition_in, transition_out, update_slot_base } from "svelte/internal";
import { createEventDispatcher, onMount } from 'svelte';
function create_fragment(ctx) {
    let rux_button;
    let current;
    const default_slot_template = /*#slots*/ ctx[9].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
    return {
        c() {
            rux_button = element("rux-button");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(rux_button, "icon", /*icon*/ ctx[0]);
            set_custom_element_data(rux_button, "icon-only", /*iconOnly*/ ctx[1]);
            set_custom_element_data(rux_button, "secondary", /*secondary*/ ctx[2]);
            set_custom_element_data(rux_button, "disabled", /*disabled*/ ctx[3]);
            set_custom_element_data(rux_button, "size", /*size*/ ctx[4]);
            set_custom_element_data(rux_button, "type", /*type*/ ctx[5]);
        },
        m(target, anchor) {
            insert(target, rux_button, anchor);
            if (default_slot) {
                default_slot.m(rux_button, null);
            }
            /*rux_button_binding*/ ctx[10](rux_button);
            current = true;
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 256)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[8], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, null), null);
                }
            }
            if (!current || dirty & /*icon*/ 1) {
                set_custom_element_data(rux_button, "icon", /*icon*/ ctx[0]);
            }
            if (!current || dirty & /*iconOnly*/ 2) {
                set_custom_element_data(rux_button, "icon-only", /*iconOnly*/ ctx[1]);
            }
            if (!current || dirty & /*secondary*/ 4) {
                set_custom_element_data(rux_button, "secondary", /*secondary*/ ctx[2]);
            }
            if (!current || dirty & /*disabled*/ 8) {
                set_custom_element_data(rux_button, "disabled", /*disabled*/ ctx[3]);
            }
            if (!current || dirty & /*size*/ 16) {
                set_custom_element_data(rux_button, "size", /*size*/ ctx[4]);
            }
            if (!current || dirty & /*type*/ 32) {
                set_custom_element_data(rux_button, "type", /*type*/ ctx[5]);
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
                detach(rux_button);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_button_binding*/ ctx[10](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { icon = undefined } = $$props;
    let { iconOnly = undefined } = $$props;
    let { secondary = undefined } = $$props;
    let { disabled = undefined } = $$props;
    let { size = undefined } = $$props;
    let { type = undefined } = $$props;
    const getWebComponent = () => __ref;
    onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(6, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_button_binding($$value) {
        binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(6, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('icon' in $$props)
            $$invalidate(0, icon = $$props.icon);
        if ('iconOnly' in $$props)
            $$invalidate(1, iconOnly = $$props.iconOnly);
        if ('secondary' in $$props)
            $$invalidate(2, secondary = $$props.secondary);
        if ('disabled' in $$props)
            $$invalidate(3, disabled = $$props.disabled);
        if ('size' in $$props)
            $$invalidate(4, size = $$props.size);
        if ('type' in $$props)
            $$invalidate(5, type = $$props.type);
        if ('$$scope' in $$props)
            $$invalidate(8, $$scope = $$props.$$scope);
    };
    return [
        icon,
        iconOnly,
        secondary,
        disabled,
        size,
        type,
        __ref,
        getWebComponent,
        $$scope,
        slots,
        rux_button_binding
    ];
}
class RuxButton extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            icon: 0,
            iconOnly: 1,
            secondary: 2,
            disabled: 3,
            size: 4,
            type: 5,
            getWebComponent: 7
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get icon() {
        return this.$$.ctx[0];
    }
    set icon(icon) {
        this.$$set({ icon });
        flush();
    }
    get iconOnly() {
        return this.$$.ctx[1];
    }
    set iconOnly(iconOnly) {
        this.$$set({ iconOnly });
        flush();
    }
    get secondary() {
        return this.$$.ctx[2];
    }
    set secondary(secondary) {
        this.$$set({ secondary });
        flush();
    }
    get disabled() {
        return this.$$.ctx[3];
    }
    set disabled(disabled) {
        this.$$set({ disabled });
        flush();
    }
    get size() {
        return this.$$.ctx[4];
    }
    set size(size) {
        this.$$set({ size });
        flush();
    }
    get type() {
        return this.$$.ctx[5];
    }
    set type(type) {
        this.$$set({ type });
        flush();
    }
    get getWebComponent() {
        return this.$$.ctx[7];
    }
}
export default RuxButton;
//# sourceMappingURL=RuxButton.js.map