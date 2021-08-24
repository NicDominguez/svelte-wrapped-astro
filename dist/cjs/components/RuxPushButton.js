"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_push_button;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[9].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
    return {
        c() {
            rux_push_button = internal_1.element("rux-push-button");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_push_button, "disabled", /*disabled*/ ctx[0]);
            internal_1.set_custom_element_data(rux_push_button, "checked", /*checked*/ ctx[1]);
            internal_1.set_custom_element_data(rux_push_button, "label", /*label*/ ctx[2]);
            internal_1.set_custom_element_data(rux_push_button, "name", /*name*/ ctx[3]);
            internal_1.set_custom_element_data(rux_push_button, "value", /*value*/ ctx[4]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_push_button, anchor);
            if (default_slot) {
                default_slot.m(rux_push_button, null);
            }
            /*rux_push_button_binding*/ ctx[10](rux_push_button);
            current = true;
            if (!mounted) {
                dispose = internal_1.listen(rux_push_button, "rux-change", /*onEvent*/ ctx[6]);
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 256)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[8], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[8])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, null), null);
                }
            }
            if (!current || dirty & /*disabled*/ 1) {
                internal_1.set_custom_element_data(rux_push_button, "disabled", /*disabled*/ ctx[0]);
            }
            if (!current || dirty & /*checked*/ 2) {
                internal_1.set_custom_element_data(rux_push_button, "checked", /*checked*/ ctx[1]);
            }
            if (!current || dirty & /*label*/ 4) {
                internal_1.set_custom_element_data(rux_push_button, "label", /*label*/ ctx[2]);
            }
            if (!current || dirty & /*name*/ 8) {
                internal_1.set_custom_element_data(rux_push_button, "name", /*name*/ ctx[3]);
            }
            if (!current || dirty & /*value*/ 16) {
                internal_1.set_custom_element_data(rux_push_button, "value", /*value*/ ctx[4]);
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
                internal_1.detach(rux_push_button);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_push_button_binding*/ ctx[10](null);
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
    let { checked = undefined } = $$props;
    let { label = undefined } = $$props;
    let { name = undefined } = $$props;
    let { value = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(5, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_push_button_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(5, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('disabled' in $$props)
            $$invalidate(0, disabled = $$props.disabled);
        if ('checked' in $$props)
            $$invalidate(1, checked = $$props.checked);
        if ('label' in $$props)
            $$invalidate(2, label = $$props.label);
        if ('name' in $$props)
            $$invalidate(3, name = $$props.name);
        if ('value' in $$props)
            $$invalidate(4, value = $$props.value);
        if ('$$scope' in $$props)
            $$invalidate(8, $$scope = $$props.$$scope);
    };
    return [
        disabled,
        checked,
        label,
        name,
        value,
        __ref,
        onEvent,
        getWebComponent,
        $$scope,
        slots,
        rux_push_button_binding
    ];
}
class RuxPushButton extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            disabled: 0,
            checked: 1,
            label: 2,
            name: 3,
            value: 4,
            getWebComponent: 7
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
    get checked() {
        return this.$$.ctx[1];
    }
    set checked(checked) {
        this.$$set({ checked });
        internal_1.flush();
    }
    get label() {
        return this.$$.ctx[2];
    }
    set label(label) {
        this.$$set({ label });
        internal_1.flush();
    }
    get name() {
        return this.$$.ctx[3];
    }
    set name(name) {
        this.$$set({ name });
        internal_1.flush();
    }
    get value() {
        return this.$$.ctx[4];
    }
    set value(value) {
        this.$$set({ value });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[7];
    }
}
exports.default = RuxPushButton;
//# sourceMappingURL=RuxPushButton.js.map