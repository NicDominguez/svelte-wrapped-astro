"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_table_row;
    let current;
    const default_slot_template = /*#slots*/ ctx[4].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
    return {
        c() {
            rux_table_row = internal_1.element("rux-table-row");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_table_row, "selected", /*selected*/ ctx[0]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_table_row, anchor);
            if (default_slot) {
                default_slot.m(rux_table_row, null);
            }
            /*rux_table_row_binding*/ ctx[5](rux_table_row);
            current = true;
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[3], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[3])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null), null);
                }
            }
            if (!current || dirty & /*selected*/ 1) {
                internal_1.set_custom_element_data(rux_table_row, "selected", /*selected*/ ctx[0]);
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
                internal_1.detach(rux_table_row);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_table_row_binding*/ ctx[5](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = svelte_1.createEventDispatcher();
    let { selected = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(1, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_table_row_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(1, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('selected' in $$props)
            $$invalidate(0, selected = $$props.selected);
        if ('$$scope' in $$props)
            $$invalidate(3, $$scope = $$props.$$scope);
    };
    return [selected, __ref, getWebComponent, $$scope, slots, rux_table_row_binding];
}
class RuxTableRow extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, { selected: 0, getWebComponent: 2 });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get selected() {
        return this.$$.ctx[0];
    }
    set selected(selected) {
        this.$$set({ selected });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[2];
    }
}
exports.default = RuxTableRow;
//# sourceMappingURL=RuxTableRow.js.map