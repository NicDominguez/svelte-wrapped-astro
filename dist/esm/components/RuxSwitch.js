/* generated by Svelte v3.42.3 */
import { SvelteComponent, binding_callbacks, create_slot, detach, element, flush, get_all_dirty_from_scope, get_slot_changes, init, insert, listen, run_all, safe_not_equal, set_custom_element_data, transition_in, transition_out, update_slot_base } from "svelte/internal";
import { createEventDispatcher, onMount } from 'svelte';
function create_fragment(ctx) {
    let rux_switch;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[11].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);
    return {
        c() {
            rux_switch = element("rux-switch");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(rux_switch, "help-text", /*helpText*/ ctx[0]);
            set_custom_element_data(rux_switch, "error-text", /*errorText*/ ctx[1]);
            set_custom_element_data(rux_switch, "name", /*name*/ ctx[2]);
            set_custom_element_data(rux_switch, "value", /*value*/ ctx[3]);
            set_custom_element_data(rux_switch, "checked", /*checked*/ ctx[4]);
            set_custom_element_data(rux_switch, "disabled", /*disabled*/ ctx[5]);
            set_custom_element_data(rux_switch, "required", /*required*/ ctx[6]);
        },
        m(target, anchor) {
            insert(target, rux_switch, anchor);
            if (default_slot) {
                default_slot.m(rux_switch, null);
            }
            /*rux_switch_binding*/ ctx[12](rux_switch);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(rux_switch, "rux-change", /*onEvent*/ ctx[8]),
                    listen(rux_switch, "rux-input", /*onEvent*/ ctx[8])
                ];
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[10], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null), null);
                }
            }
            if (!current || dirty & /*helpText*/ 1) {
                set_custom_element_data(rux_switch, "help-text", /*helpText*/ ctx[0]);
            }
            if (!current || dirty & /*errorText*/ 2) {
                set_custom_element_data(rux_switch, "error-text", /*errorText*/ ctx[1]);
            }
            if (!current || dirty & /*name*/ 4) {
                set_custom_element_data(rux_switch, "name", /*name*/ ctx[2]);
            }
            if (!current || dirty & /*value*/ 8) {
                set_custom_element_data(rux_switch, "value", /*value*/ ctx[3]);
            }
            if (!current || dirty & /*checked*/ 16) {
                set_custom_element_data(rux_switch, "checked", /*checked*/ ctx[4]);
            }
            if (!current || dirty & /*disabled*/ 32) {
                set_custom_element_data(rux_switch, "disabled", /*disabled*/ ctx[5]);
            }
            if (!current || dirty & /*required*/ 64) {
                set_custom_element_data(rux_switch, "required", /*required*/ ctx[6]);
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
                detach(rux_switch);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_switch_binding*/ ctx[12](null);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { helpText = undefined } = $$props;
    let { errorText = undefined } = $$props;
    let { name = undefined } = $$props;
    let { value = undefined } = $$props;
    let { checked = undefined } = $$props;
    let { disabled = undefined } = $$props;
    let { required = undefined } = $$props;
    const getWebComponent = () => __ref;
    onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(7, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_switch_binding($$value) {
        binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(7, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('helpText' in $$props)
            $$invalidate(0, helpText = $$props.helpText);
        if ('errorText' in $$props)
            $$invalidate(1, errorText = $$props.errorText);
        if ('name' in $$props)
            $$invalidate(2, name = $$props.name);
        if ('value' in $$props)
            $$invalidate(3, value = $$props.value);
        if ('checked' in $$props)
            $$invalidate(4, checked = $$props.checked);
        if ('disabled' in $$props)
            $$invalidate(5, disabled = $$props.disabled);
        if ('required' in $$props)
            $$invalidate(6, required = $$props.required);
        if ('$$scope' in $$props)
            $$invalidate(10, $$scope = $$props.$$scope);
    };
    return [
        helpText,
        errorText,
        name,
        value,
        checked,
        disabled,
        required,
        __ref,
        onEvent,
        getWebComponent,
        $$scope,
        slots,
        rux_switch_binding
    ];
}
class RuxSwitch extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            helpText: 0,
            errorText: 1,
            name: 2,
            value: 3,
            checked: 4,
            disabled: 5,
            required: 6,
            getWebComponent: 9
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get helpText() {
        return this.$$.ctx[0];
    }
    set helpText(helpText) {
        this.$$set({ helpText });
        flush();
    }
    get errorText() {
        return this.$$.ctx[1];
    }
    set errorText(errorText) {
        this.$$set({ errorText });
        flush();
    }
    get name() {
        return this.$$.ctx[2];
    }
    set name(name) {
        this.$$set({ name });
        flush();
    }
    get value() {
        return this.$$.ctx[3];
    }
    set value(value) {
        this.$$set({ value });
        flush();
    }
    get checked() {
        return this.$$.ctx[4];
    }
    set checked(checked) {
        this.$$set({ checked });
        flush();
    }
    get disabled() {
        return this.$$.ctx[5];
    }
    set disabled(disabled) {
        this.$$set({ disabled });
        flush();
    }
    get required() {
        return this.$$.ctx[6];
    }
    set required(required) {
        this.$$set({ required });
        flush();
    }
    get getWebComponent() {
        return this.$$.ctx[9];
    }
}
export default RuxSwitch;
//# sourceMappingURL=RuxSwitch.js.map