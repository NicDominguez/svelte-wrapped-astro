"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_segmented_button;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[7].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    return {
        c() {
            rux_segmented_button = internal_1.element("rux-segmented-button");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_segmented_button, "selected", /*selected*/ ctx[0]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_segmented_button, anchor);
            if (default_slot) {
                default_slot.m(rux_segmented_button, null);
            }
            /*rux_segmented_button_binding*/ ctx[8](rux_segmented_button);
            current = true;
            if (!mounted) {
                dispose = internal_1.listen(rux_segmented_button, "rux-change", /*onEvent*/ ctx[2]);
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[6], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[6])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null), null);
                }
            }
            if (!current || dirty & /*selected*/ 1) {
                internal_1.set_custom_element_data(rux_segmented_button, "selected", /*selected*/ ctx[0]);
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
                internal_1.detach(rux_segmented_button);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_segmented_button_binding*/ ctx[8](null);
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
    let { data = undefined } = $$props;
    let { selected = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        $$invalidate(5, __mounted = true);
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(1, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_segmented_button_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(1, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('data' in $$props)
            $$invalidate(3, data = $$props.data);
        if ('selected' in $$props)
            $$invalidate(0, selected = $$props.selected);
        if ('$$scope' in $$props)
            $$invalidate(6, $$scope = $$props.$$scope);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & /*__mounted, data*/ 40) {
            $: if (__mounted)
                setProp('data', data);
        }
    };
    return [
        selected,
        __ref,
        onEvent,
        data,
        getWebComponent,
        __mounted,
        $$scope,
        slots,
        rux_segmented_button_binding
    ];
}
class RuxSegmentedButton extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, { data: 3, selected: 0, getWebComponent: 4 });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get data() {
        return this.$$.ctx[3];
    }
    set data(data) {
        this.$$set({ data });
        internal_1.flush();
    }
    get selected() {
        return this.$$.ctx[0];
    }
    set selected(selected) {
        this.$$set({ selected });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[4];
    }
}
exports.default = RuxSegmentedButton;
//# sourceMappingURL=RuxSegmentedButton.js.map