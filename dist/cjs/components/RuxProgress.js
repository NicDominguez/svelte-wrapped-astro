"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_progress;
    let current;
    const default_slot_template = /*#slots*/ ctx[6].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    return {
        c() {
            rux_progress = internal_1.element("rux-progress");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_progress, "value", /*value*/ ctx[0]);
            internal_1.set_custom_element_data(rux_progress, "max", /*max*/ ctx[1]);
            internal_1.set_custom_element_data(rux_progress, "hide-label", /*hideLabel*/ ctx[2]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_progress, anchor);
            if (default_slot) {
                default_slot.m(rux_progress, null);
            }
            /*rux_progress_binding*/ ctx[7](rux_progress);
            current = true;
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[5], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[5])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null), null);
                }
            }
            if (!current || dirty & /*value*/ 1) {
                internal_1.set_custom_element_data(rux_progress, "value", /*value*/ ctx[0]);
            }
            if (!current || dirty & /*max*/ 2) {
                internal_1.set_custom_element_data(rux_progress, "max", /*max*/ ctx[1]);
            }
            if (!current || dirty & /*hideLabel*/ 4) {
                internal_1.set_custom_element_data(rux_progress, "hide-label", /*hideLabel*/ ctx[2]);
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
                internal_1.detach(rux_progress);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_progress_binding*/ ctx[7](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { value = undefined } = $$props;
    let { max = undefined } = $$props;
    let { hideLabel = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(3, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_progress_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(3, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('value' in $$props)
            $$invalidate(0, value = $$props.value);
        if ('max' in $$props)
            $$invalidate(1, max = $$props.max);
        if ('hideLabel' in $$props)
            $$invalidate(2, hideLabel = $$props.hideLabel);
        if ('$$scope' in $$props)
            $$invalidate(5, $$scope = $$props.$$scope);
    };
    return [
        value,
        max,
        hideLabel,
        __ref,
        getWebComponent,
        $$scope,
        slots,
        rux_progress_binding
    ];
}
class RuxProgress extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            value: 0,
            max: 1,
            hideLabel: 2,
            getWebComponent: 4
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get value() {
        return this.$$.ctx[0];
    }
    set value(value) {
        this.$$set({ value });
        internal_1.flush();
    }
    get max() {
        return this.$$.ctx[1];
    }
    set max(max) {
        this.$$set({ max });
        internal_1.flush();
    }
    get hideLabel() {
        return this.$$.ctx[2];
    }
    set hideLabel(hideLabel) {
        this.$$set({ hideLabel });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[4];
    }
}
exports.default = RuxProgress;
//# sourceMappingURL=RuxProgress.js.map