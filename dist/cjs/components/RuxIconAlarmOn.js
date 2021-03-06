"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_icon_alarm_on;
    let current;
    const default_slot_template = /*#slots*/ ctx[5].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
    return {
        c() {
            rux_icon_alarm_on = internal_1.element("rux-icon-alarm-on");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_icon_alarm_on, "color", /*color*/ ctx[0]);
            internal_1.set_custom_element_data(rux_icon_alarm_on, "size", /*size*/ ctx[1]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_icon_alarm_on, anchor);
            if (default_slot) {
                default_slot.m(rux_icon_alarm_on, null);
            }
            /*rux_icon_alarm_on_binding*/ ctx[6](rux_icon_alarm_on);
            current = true;
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[4], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[4])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null), null);
                }
            }
            if (!current || dirty & /*color*/ 1) {
                internal_1.set_custom_element_data(rux_icon_alarm_on, "color", /*color*/ ctx[0]);
            }
            if (!current || dirty & /*size*/ 2) {
                internal_1.set_custom_element_data(rux_icon_alarm_on, "size", /*size*/ ctx[1]);
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
                internal_1.detach(rux_icon_alarm_on);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_icon_alarm_on_binding*/ ctx[6](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { color = undefined } = $$props;
    let { size = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
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
    function rux_icon_alarm_on_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
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
    return [color, size, __ref, getWebComponent, $$scope, slots, rux_icon_alarm_on_binding];
}
class RuxIconAlarmOn extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, { color: 0, size: 1, getWebComponent: 3 });
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
        internal_1.flush();
    }
    get size() {
        return this.$$.ctx[1];
    }
    set size(size) {
        this.$$set({ size });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[3];
    }
}
exports.default = RuxIconAlarmOn;
//# sourceMappingURL=RuxIconAlarmOn.js.map