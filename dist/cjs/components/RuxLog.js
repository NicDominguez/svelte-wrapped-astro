"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_log;
    let current;
    const default_slot_template = /*#slots*/ ctx[7].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    return {
        c() {
            rux_log = internal_1.element("rux-log");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_log, "timezone", /*timezone*/ ctx[0]);
            internal_1.set_custom_element_data(rux_log, "filter", /*filter*/ ctx[1]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_log, anchor);
            if (default_slot) {
                default_slot.m(rux_log, null);
            }
            /*rux_log_binding*/ ctx[8](rux_log);
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
            if (!current || dirty & /*timezone*/ 1) {
                internal_1.set_custom_element_data(rux_log, "timezone", /*timezone*/ ctx[0]);
            }
            if (!current || dirty & /*filter*/ 2) {
                internal_1.set_custom_element_data(rux_log, "filter", /*filter*/ ctx[1]);
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
                internal_1.detach(rux_log);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_log_binding*/ ctx[8](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { data = undefined } = $$props;
    let { timezone = undefined } = $$props;
    let { filter = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        $$invalidate(5, __mounted = true);
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(2, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_log_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(2, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('data' in $$props)
            $$invalidate(3, data = $$props.data);
        if ('timezone' in $$props)
            $$invalidate(0, timezone = $$props.timezone);
        if ('filter' in $$props)
            $$invalidate(1, filter = $$props.filter);
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
        timezone,
        filter,
        __ref,
        data,
        getWebComponent,
        __mounted,
        $$scope,
        slots,
        rux_log_binding
    ];
}
class RuxLog extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            data: 3,
            timezone: 0,
            filter: 1,
            getWebComponent: 4
        });
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
    get timezone() {
        return this.$$.ctx[0];
    }
    set timezone(timezone) {
        this.$$set({ timezone });
        internal_1.flush();
    }
    get filter() {
        return this.$$.ctx[1];
    }
    set filter(filter) {
        this.$$set({ filter });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[4];
    }
}
exports.default = RuxLog;
//# sourceMappingURL=RuxLog.js.map