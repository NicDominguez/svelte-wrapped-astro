/* generated by Svelte v3.42.3 */
import { SvelteComponent, binding_callbacks, create_slot, detach, element, flush, get_all_dirty_from_scope, get_slot_changes, init, insert, listen, safe_not_equal, set_custom_element_data, transition_in, transition_out, update_slot_base } from "svelte/internal";
import { createEventDispatcher, onMount } from 'svelte';
function create_fragment(ctx) {
    let rux_modal;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[9].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
    return {
        c() {
            rux_modal = element("rux-modal");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(rux_modal, "open", /*open*/ ctx[0]);
            set_custom_element_data(rux_modal, "modal-message", /*modalMessage*/ ctx[1]);
            set_custom_element_data(rux_modal, "modal-title", /*modalTitle*/ ctx[2]);
            set_custom_element_data(rux_modal, "confirm-text", /*confirmText*/ ctx[3]);
            set_custom_element_data(rux_modal, "deny-text", /*denyText*/ ctx[4]);
        },
        m(target, anchor) {
            insert(target, rux_modal, anchor);
            if (default_slot) {
                default_slot.m(rux_modal, null);
            }
            /*rux_modal_binding*/ ctx[10](rux_modal);
            current = true;
            if (!mounted) {
                dispose = listen(rux_modal, "rux-modal-closed", /*onEvent*/ ctx[6]);
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 256)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[8], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, null), null);
                }
            }
            if (!current || dirty & /*open*/ 1) {
                set_custom_element_data(rux_modal, "open", /*open*/ ctx[0]);
            }
            if (!current || dirty & /*modalMessage*/ 2) {
                set_custom_element_data(rux_modal, "modal-message", /*modalMessage*/ ctx[1]);
            }
            if (!current || dirty & /*modalTitle*/ 4) {
                set_custom_element_data(rux_modal, "modal-title", /*modalTitle*/ ctx[2]);
            }
            if (!current || dirty & /*confirmText*/ 8) {
                set_custom_element_data(rux_modal, "confirm-text", /*confirmText*/ ctx[3]);
            }
            if (!current || dirty & /*denyText*/ 16) {
                set_custom_element_data(rux_modal, "deny-text", /*denyText*/ ctx[4]);
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
                detach(rux_modal);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_modal_binding*/ ctx[10](null);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { open } = $$props;
    let { modalMessage } = $$props;
    let { modalTitle } = $$props;
    let { confirmText = undefined } = $$props;
    let { denyText = undefined } = $$props;
    const getWebComponent = () => __ref;
    onMount(() => {
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
    function rux_modal_binding($$value) {
        binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(5, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('open' in $$props)
            $$invalidate(0, open = $$props.open);
        if ('modalMessage' in $$props)
            $$invalidate(1, modalMessage = $$props.modalMessage);
        if ('modalTitle' in $$props)
            $$invalidate(2, modalTitle = $$props.modalTitle);
        if ('confirmText' in $$props)
            $$invalidate(3, confirmText = $$props.confirmText);
        if ('denyText' in $$props)
            $$invalidate(4, denyText = $$props.denyText);
        if ('$$scope' in $$props)
            $$invalidate(8, $$scope = $$props.$$scope);
    };
    return [
        open,
        modalMessage,
        modalTitle,
        confirmText,
        denyText,
        __ref,
        onEvent,
        getWebComponent,
        $$scope,
        slots,
        rux_modal_binding
    ];
}
class RuxModal extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            open: 0,
            modalMessage: 1,
            modalTitle: 2,
            confirmText: 3,
            denyText: 4,
            getWebComponent: 7
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
    get modalMessage() {
        return this.$$.ctx[1];
    }
    set modalMessage(modalMessage) {
        this.$$set({ modalMessage });
        flush();
    }
    get modalTitle() {
        return this.$$.ctx[2];
    }
    set modalTitle(modalTitle) {
        this.$$set({ modalTitle });
        flush();
    }
    get confirmText() {
        return this.$$.ctx[3];
    }
    set confirmText(confirmText) {
        this.$$set({ confirmText });
        flush();
    }
    get denyText() {
        return this.$$.ctx[4];
    }
    set denyText(denyText) {
        this.$$set({ denyText });
        flush();
    }
    get getWebComponent() {
        return this.$$.ctx[7];
    }
}
export default RuxModal;
//# sourceMappingURL=RuxModal.js.map