"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_textarea;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[17].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);
    return {
        c() {
            rux_textarea = internal_1.element("rux-textarea");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_textarea, "label", /*label*/ ctx[0]);
            internal_1.set_custom_element_data(rux_textarea, "placeholder", /*placeholder*/ ctx[1]);
            internal_1.set_custom_element_data(rux_textarea, "help-text", /*helpText*/ ctx[2]);
            internal_1.set_custom_element_data(rux_textarea, "error-text", /*errorText*/ ctx[3]);
            internal_1.set_custom_element_data(rux_textarea, "invalid", /*invalid*/ ctx[4]);
            internal_1.set_custom_element_data(rux_textarea, "value", /*value*/ ctx[5]);
            internal_1.set_custom_element_data(rux_textarea, "name", /*name*/ ctx[6]);
            internal_1.set_custom_element_data(rux_textarea, "min-length", /*minLength*/ ctx[7]);
            internal_1.set_custom_element_data(rux_textarea, "max-length", /*maxLength*/ ctx[8]);
            internal_1.set_custom_element_data(rux_textarea, "rows", /*rows*/ ctx[9]);
            internal_1.set_custom_element_data(rux_textarea, "disabled", /*disabled*/ ctx[10]);
            internal_1.set_custom_element_data(rux_textarea, "required", /*required*/ ctx[11]);
            internal_1.set_custom_element_data(rux_textarea, "small", /*small*/ ctx[12]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_textarea, anchor);
            if (default_slot) {
                default_slot.m(rux_textarea, null);
            }
            /*rux_textarea_binding*/ ctx[18](rux_textarea);
            current = true;
            if (!mounted) {
                dispose = [
                    internal_1.listen(rux_textarea, "rux-change", /*onEvent*/ ctx[14]),
                    internal_1.listen(rux_textarea, "rux-input", /*onEvent*/ ctx[14])
                ];
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[16], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[16])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null), null);
                }
            }
            if (!current || dirty & /*label*/ 1) {
                internal_1.set_custom_element_data(rux_textarea, "label", /*label*/ ctx[0]);
            }
            if (!current || dirty & /*placeholder*/ 2) {
                internal_1.set_custom_element_data(rux_textarea, "placeholder", /*placeholder*/ ctx[1]);
            }
            if (!current || dirty & /*helpText*/ 4) {
                internal_1.set_custom_element_data(rux_textarea, "help-text", /*helpText*/ ctx[2]);
            }
            if (!current || dirty & /*errorText*/ 8) {
                internal_1.set_custom_element_data(rux_textarea, "error-text", /*errorText*/ ctx[3]);
            }
            if (!current || dirty & /*invalid*/ 16) {
                internal_1.set_custom_element_data(rux_textarea, "invalid", /*invalid*/ ctx[4]);
            }
            if (!current || dirty & /*value*/ 32) {
                internal_1.set_custom_element_data(rux_textarea, "value", /*value*/ ctx[5]);
            }
            if (!current || dirty & /*name*/ 64) {
                internal_1.set_custom_element_data(rux_textarea, "name", /*name*/ ctx[6]);
            }
            if (!current || dirty & /*minLength*/ 128) {
                internal_1.set_custom_element_data(rux_textarea, "min-length", /*minLength*/ ctx[7]);
            }
            if (!current || dirty & /*maxLength*/ 256) {
                internal_1.set_custom_element_data(rux_textarea, "max-length", /*maxLength*/ ctx[8]);
            }
            if (!current || dirty & /*rows*/ 512) {
                internal_1.set_custom_element_data(rux_textarea, "rows", /*rows*/ ctx[9]);
            }
            if (!current || dirty & /*disabled*/ 1024) {
                internal_1.set_custom_element_data(rux_textarea, "disabled", /*disabled*/ ctx[10]);
            }
            if (!current || dirty & /*required*/ 2048) {
                internal_1.set_custom_element_data(rux_textarea, "required", /*required*/ ctx[11]);
            }
            if (!current || dirty & /*small*/ 4096) {
                internal_1.set_custom_element_data(rux_textarea, "small", /*small*/ ctx[12]);
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
                internal_1.detach(rux_textarea);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_textarea_binding*/ ctx[18](null);
            mounted = false;
            internal_1.run_all(dispose);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { label = undefined } = $$props;
    let { placeholder = undefined } = $$props;
    let { helpText = undefined } = $$props;
    let { errorText = undefined } = $$props;
    let { invalid = undefined } = $$props;
    let { value = undefined } = $$props;
    let { name = undefined } = $$props;
    let { minLength = undefined } = $$props;
    let { maxLength = undefined } = $$props;
    let { rows = undefined } = $$props;
    let { disabled = undefined } = $$props;
    let { required = undefined } = $$props;
    let { small = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(13, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_textarea_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(13, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('label' in $$props)
            $$invalidate(0, label = $$props.label);
        if ('placeholder' in $$props)
            $$invalidate(1, placeholder = $$props.placeholder);
        if ('helpText' in $$props)
            $$invalidate(2, helpText = $$props.helpText);
        if ('errorText' in $$props)
            $$invalidate(3, errorText = $$props.errorText);
        if ('invalid' in $$props)
            $$invalidate(4, invalid = $$props.invalid);
        if ('value' in $$props)
            $$invalidate(5, value = $$props.value);
        if ('name' in $$props)
            $$invalidate(6, name = $$props.name);
        if ('minLength' in $$props)
            $$invalidate(7, minLength = $$props.minLength);
        if ('maxLength' in $$props)
            $$invalidate(8, maxLength = $$props.maxLength);
        if ('rows' in $$props)
            $$invalidate(9, rows = $$props.rows);
        if ('disabled' in $$props)
            $$invalidate(10, disabled = $$props.disabled);
        if ('required' in $$props)
            $$invalidate(11, required = $$props.required);
        if ('small' in $$props)
            $$invalidate(12, small = $$props.small);
        if ('$$scope' in $$props)
            $$invalidate(16, $$scope = $$props.$$scope);
    };
    return [
        label,
        placeholder,
        helpText,
        errorText,
        invalid,
        value,
        name,
        minLength,
        maxLength,
        rows,
        disabled,
        required,
        small,
        __ref,
        onEvent,
        getWebComponent,
        $$scope,
        slots,
        rux_textarea_binding
    ];
}
class RuxTextarea extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            label: 0,
            placeholder: 1,
            helpText: 2,
            errorText: 3,
            invalid: 4,
            value: 5,
            name: 6,
            minLength: 7,
            maxLength: 8,
            rows: 9,
            disabled: 10,
            required: 11,
            small: 12,
            getWebComponent: 15
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get label() {
        return this.$$.ctx[0];
    }
    set label(label) {
        this.$$set({ label });
        internal_1.flush();
    }
    get placeholder() {
        return this.$$.ctx[1];
    }
    set placeholder(placeholder) {
        this.$$set({ placeholder });
        internal_1.flush();
    }
    get helpText() {
        return this.$$.ctx[2];
    }
    set helpText(helpText) {
        this.$$set({ helpText });
        internal_1.flush();
    }
    get errorText() {
        return this.$$.ctx[3];
    }
    set errorText(errorText) {
        this.$$set({ errorText });
        internal_1.flush();
    }
    get invalid() {
        return this.$$.ctx[4];
    }
    set invalid(invalid) {
        this.$$set({ invalid });
        internal_1.flush();
    }
    get value() {
        return this.$$.ctx[5];
    }
    set value(value) {
        this.$$set({ value });
        internal_1.flush();
    }
    get name() {
        return this.$$.ctx[6];
    }
    set name(name) {
        this.$$set({ name });
        internal_1.flush();
    }
    get minLength() {
        return this.$$.ctx[7];
    }
    set minLength(minLength) {
        this.$$set({ minLength });
        internal_1.flush();
    }
    get maxLength() {
        return this.$$.ctx[8];
    }
    set maxLength(maxLength) {
        this.$$set({ maxLength });
        internal_1.flush();
    }
    get rows() {
        return this.$$.ctx[9];
    }
    set rows(rows) {
        this.$$set({ rows });
        internal_1.flush();
    }
    get disabled() {
        return this.$$.ctx[10];
    }
    set disabled(disabled) {
        this.$$set({ disabled });
        internal_1.flush();
    }
    get required() {
        return this.$$.ctx[11];
    }
    set required(required) {
        this.$$set({ required });
        internal_1.flush();
    }
    get small() {
        return this.$$.ctx[12];
    }
    set small(small) {
        this.$$set({ small });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[15];
    }
}
exports.default = RuxTextarea;
//# sourceMappingURL=RuxTextarea.js.map