/* generated by Svelte v3.42.3 */
import { SvelteComponent, binding_callbacks, create_slot, detach, element, flush, get_all_dirty_from_scope, get_slot_changes, init, insert, safe_not_equal, set_custom_element_data, transition_in, transition_out, update_slot_base } from "svelte/internal";
import { createEventDispatcher, onMount } from 'svelte';
function create_fragment(ctx) {
    let rux_notification;
    let current;
    const default_slot_template = /*#slots*/ ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    return {
        c() {
            rux_notification = element("rux-notification");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(rux_notification, "open", /*open*/ ctx[0]);
            set_custom_element_data(rux_notification, "message", /*message*/ ctx[1]);
            set_custom_element_data(rux_notification, "status", /*status*/ ctx[2]);
            set_custom_element_data(rux_notification, "close-after", /*closeAfter*/ ctx[3]);
        },
        m(target, anchor) {
            insert(target, rux_notification, anchor);
            if (default_slot) {
                default_slot.m(rux_notification, null);
            }
            /*rux_notification_binding*/ ctx[8](rux_notification);
            current = true;
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[6], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null), null);
                }
            }
            if (!current || dirty & /*open*/ 1) {
                set_custom_element_data(rux_notification, "open", /*open*/ ctx[0]);
            }
            if (!current || dirty & /*message*/ 2) {
                set_custom_element_data(rux_notification, "message", /*message*/ ctx[1]);
            }
            if (!current || dirty & /*status*/ 4) {
                set_custom_element_data(rux_notification, "status", /*status*/ ctx[2]);
            }
            if (!current || dirty & /*closeAfter*/ 8) {
                set_custom_element_data(rux_notification, "close-after", /*closeAfter*/ ctx[3]);
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
                detach(rux_notification);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_notification_binding*/ ctx[8](null);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { open = undefined } = $$props;
    let { message = undefined } = $$props;
    let { status = undefined } = $$props;
    let { closeAfter = undefined } = $$props;
    const getWebComponent = () => __ref;
    onMount(() => {
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
    function rux_notification_binding($$value) {
        binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(4, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('open' in $$props)
            $$invalidate(0, open = $$props.open);
        if ('message' in $$props)
            $$invalidate(1, message = $$props.message);
        if ('status' in $$props)
            $$invalidate(2, status = $$props.status);
        if ('closeAfter' in $$props)
            $$invalidate(3, closeAfter = $$props.closeAfter);
        if ('$$scope' in $$props)
            $$invalidate(6, $$scope = $$props.$$scope);
    };
    return [
        open,
        message,
        status,
        closeAfter,
        __ref,
        getWebComponent,
        $$scope,
        slots,
        rux_notification_binding
    ];
}
class RuxNotification extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            open: 0,
            message: 1,
            status: 2,
            closeAfter: 3,
            getWebComponent: 5
        });
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    get open() {
        return this.$$.ctx[0];
    }
    set open(open) {
        this.$$set({ open });
        flush();
    }
    get message() {
        return this.$$.ctx[1];
    }
    set message(message) {
        this.$$set({ message });
        flush();
    }
    get status() {
        return this.$$.ctx[2];
    }
    set status(status) {
        this.$$set({ status });
        flush();
    }
    get closeAfter() {
        return this.$$.ctx[3];
    }
    set closeAfter(closeAfter) {
        this.$$set({ closeAfter });
        flush();
    }
    get getWebComponent() {
        return this.$$.ctx[5];
    }
}
export default RuxNotification;
//# sourceMappingURL=RuxNotification.js.map