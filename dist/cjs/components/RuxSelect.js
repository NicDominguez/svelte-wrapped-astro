"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_select;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[11].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);
    return {
        c() {
            rux_select = internal_1.element("rux-select");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_select, "disabled", /*disabled*/ ctx[0]);
            internal_1.set_custom_element_data(rux_select, "required", /*required*/ ctx[1]);
            internal_1.set_custom_element_data(rux_select, "label", /*label*/ ctx[2]);
            internal_1.set_custom_element_data(rux_select, "input-id", /*inputId*/ ctx[3]);
            internal_1.set_custom_element_data(rux_select, "label-id", /*labelId*/ ctx[4]);
            internal_1.set_custom_element_data(rux_select, "invalid", /*invalid*/ ctx[5]);
            internal_1.set_custom_element_data(rux_select, "name", /*name*/ ctx[6]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_select, anchor);
            if (default_slot) {
                default_slot.m(rux_select, null);
            }
            /*rux_select_binding*/ ctx[12](rux_select);
            current = true;
            if (!mounted) {
                dispose = internal_1.listen(rux_select, "rux-change", /*onEvent*/ ctx[8]);
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[10], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[10])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null), null);
                }
            }
            if (!current || dirty & /*disabled*/ 1) {
                internal_1.set_custom_element_data(rux_select, "disabled", /*disabled*/ ctx[0]);
            }
            if (!current || dirty & /*required*/ 2) {
                internal_1.set_custom_element_data(rux_select, "required", /*required*/ ctx[1]);
            }
            if (!current || dirty & /*label*/ 4) {
                internal_1.set_custom_element_data(rux_select, "label", /*label*/ ctx[2]);
            }
            if (!current || dirty & /*inputId*/ 8) {
                internal_1.set_custom_element_data(rux_select, "input-id", /*inputId*/ ctx[3]);
            }
            if (!current || dirty & /*labelId*/ 16) {
                internal_1.set_custom_element_data(rux_select, "label-id", /*labelId*/ ctx[4]);
            }
            if (!current || dirty & /*invalid*/ 32) {
                internal_1.set_custom_element_data(rux_select, "invalid", /*invalid*/ ctx[5]);
            }
            if (!current || dirty & /*name*/ 64) {
                internal_1.set_custom_element_data(rux_select, "name", /*name*/ ctx[6]);
            }
        },
        i(local) {
            if (current)
                return;
            internal_1.transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            internal_1.transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching)
                internal_1.detach(rux_select);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_select_binding*/ ctx[12](null);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { disabled = undefined } = $$props;
    let { required = undefined } = $$props;
    let { label = undefined } = $$props;
    let { inputId = undefined } = $$props;
    let { labelId = undefined } = $$props;
    let { invalid = undefined } = $$props;
    let { name = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
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
    function rux_select_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(7, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('disabled' in $$props)
            $$invalidate(0, disabled = $$props.disabled);
        if ('required' in $$props)
            $$invalidate(1, required = $$props.required);
        if ('label' in $$props)
            $$invalidate(2, label = $$props.label);
        if ('inputId' in $$props)
            $$invalidate(3, inputId = $$props.inputId);
        if ('labelId' in $$props)
            $$invalidate(4, labelId = $$props.labelId);
        if ('invalid' in $$props)
            $$invalidate(5, invalid = $$props.invalid);
        if ('name' in $$props)
            $$invalidate(6, name = $$props.name);
        if ('$$scope' in $$props)
            $$invalidate(10, $$scope = $$props.$$scope);
    };
    return [
        disabled,
        required,
        label,
        inputId,
        labelId,
        invalid,
        name,
        __ref,
        onEvent,
        getWebComponent,
        $$scope,
        slots,
        rux_select_binding
    ];
}
class RuxSelect extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            disabled: 0,
            required: 1,
            label: 2,
            inputId: 3,
            labelId: 4,
            invalid: 5,
            name: 6,
            getWebComponent: 9
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get disabled() {
        return this.$$.ctx[0];
    }
    set disabled(disabled) {
        this.$$set({ disabled });
        internal_1.flush();
    }
    get required() {
        return this.$$.ctx[1];
    }
    set required(required) {
        this.$$set({ required });
        internal_1.flush();
    }
    get label() {
        return this.$$.ctx[2];
    }
    set label(label) {
        this.$$set({ label });
        internal_1.flush();
    }
    get inputId() {
        return this.$$.ctx[3];
    }
    set inputId(inputId) {
        this.$$set({ inputId });
        internal_1.flush();
    }
    get labelId() {
        return this.$$.ctx[4];
    }
    set labelId(labelId) {
        this.$$set({ labelId });
        internal_1.flush();
    }
    get invalid() {
        return this.$$.ctx[5];
    }
    set invalid(invalid) {
        this.$$set({ invalid });
        internal_1.flush();
    }
    get name() {
        return this.$$.ctx[6];
    }
    set name(name) {
        this.$$set({ name });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[9];
    }
}
exports.default = RuxSelect;
//# sourceMappingURL=RuxSelect.js.map