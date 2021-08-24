"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_icon;
    let current;
    const default_slot_template = /*#slots*/ ctx[7].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    return {
        c() {
            rux_icon = internal_1.element("rux-icon");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_icon, "size", /*size*/ ctx[0]);
            internal_1.set_custom_element_data(rux_icon, "icon", /*icon*/ ctx[1]);
            internal_1.set_custom_element_data(rux_icon, "color", /*color*/ ctx[2]);
            internal_1.set_custom_element_data(rux_icon, "label", /*label*/ ctx[3]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_icon, anchor);
            if (default_slot) {
                default_slot.m(rux_icon, null);
            }
            /*rux_icon_binding*/ ctx[8](rux_icon);
            current = true;
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
            if (!current || dirty & /*size*/ 1) {
                internal_1.set_custom_element_data(rux_icon, "size", /*size*/ ctx[0]);
            }
            if (!current || dirty & /*icon*/ 2) {
                internal_1.set_custom_element_data(rux_icon, "icon", /*icon*/ ctx[1]);
            }
            if (!current || dirty & /*color*/ 4) {
                internal_1.set_custom_element_data(rux_icon, "color", /*color*/ ctx[2]);
            }
            if (!current || dirty & /*label*/ 8) {
                internal_1.set_custom_element_data(rux_icon, "label", /*label*/ ctx[3]);
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
                internal_1.detach(rux_icon);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_icon_binding*/ ctx[8](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { size = undefined } = $$props;
    let { icon } = $$props;
    let { color = undefined } = $$props;
    let { label = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(4, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_icon_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(4, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('size' in $$props)
            $$invalidate(0, size = $$props.size);
        if ('icon' in $$props)
            $$invalidate(1, icon = $$props.icon);
        if ('color' in $$props)
            $$invalidate(2, color = $$props.color);
        if ('label' in $$props)
            $$invalidate(3, label = $$props.label);
        if ('$$scope' in $$props)
            $$invalidate(6, $$scope = $$props.$$scope);
    };
    return [
        size,
        icon,
        color,
        label,
        __ref,
        getWebComponent,
        $$scope,
        slots,
        rux_icon_binding
    ];
}
class RuxIcon extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            size: 0,
            icon: 1,
            color: 2,
            label: 3,
            getWebComponent: 5
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get size() {
        return this.$$.ctx[0];
    }
    set size(size) {
        this.$$set({ size });
        internal_1.flush();
    }
    get icon() {
        return this.$$.ctx[1];
    }
    set icon(icon) {
        this.$$set({ icon });
        internal_1.flush();
    }
    get color() {
        return this.$$.ctx[2];
    }
    set color(color) {
        this.$$set({ color });
        internal_1.flush();
    }
    get label() {
        return this.$$.ctx[3];
    }
    set label(label) {
        this.$$set({ label });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[5];
    }
}
exports.default = RuxIcon;
//# sourceMappingURL=RuxIcon.js.map