"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* generated by Svelte v3.42.3 */
const internal_1 = require("svelte/internal");
const svelte_1 = require("svelte");
function create_fragment(ctx) {
    let rux_menu_item;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[10].default;
    const default_slot = internal_1.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);
    return {
        c() {
            rux_menu_item = internal_1.element("rux-menu-item");
            if (default_slot)
                default_slot.c();
            internal_1.set_custom_element_data(rux_menu_item, "disabled", /*disabled*/ ctx[0]);
            internal_1.set_custom_element_data(rux_menu_item, "value", /*value*/ ctx[1]);
            internal_1.set_custom_element_data(rux_menu_item, "href", /*href*/ ctx[2]);
            internal_1.set_custom_element_data(rux_menu_item, "target", /*target*/ ctx[3]);
            internal_1.set_custom_element_data(rux_menu_item, "rel", /*rel*/ ctx[4]);
            internal_1.set_custom_element_data(rux_menu_item, "download", /*download*/ ctx[5]);
        },
        m(target, anchor) {
            internal_1.insert(target, rux_menu_item, anchor);
            if (default_slot) {
                default_slot.m(rux_menu_item, null);
            }
            /*rux_menu_item_binding*/ ctx[11](rux_menu_item);
            current = true;
            if (!mounted) {
                dispose = internal_1.listen(rux_menu_item, "rux-menu-item-selected", /*onEvent*/ ctx[7]);
                mounted = true;
            }
        },
        p(ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
                    internal_1.update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[9], !current
                        ? internal_1.get_all_dirty_from_scope(/*$$scope*/ ctx[9])
                        : internal_1.get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null), null);
                }
            }
            if (!current || dirty & /*disabled*/ 1) {
                internal_1.set_custom_element_data(rux_menu_item, "disabled", /*disabled*/ ctx[0]);
            }
            if (!current || dirty & /*value*/ 2) {
                internal_1.set_custom_element_data(rux_menu_item, "value", /*value*/ ctx[1]);
            }
            if (!current || dirty & /*href*/ 4) {
                internal_1.set_custom_element_data(rux_menu_item, "href", /*href*/ ctx[2]);
            }
            if (!current || dirty & /*target*/ 8) {
                internal_1.set_custom_element_data(rux_menu_item, "target", /*target*/ ctx[3]);
            }
            if (!current || dirty & /*rel*/ 16) {
                internal_1.set_custom_element_data(rux_menu_item, "rel", /*rel*/ ctx[4]);
            }
            if (!current || dirty & /*download*/ 32) {
                internal_1.set_custom_element_data(rux_menu_item, "download", /*download*/ ctx[5]);
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
                internal_1.detach(rux_menu_item);
            if (default_slot)
                default_slot.d(detaching);
            /*rux_menu_item_binding*/ ctx[11](null);
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
    let { value = undefined } = $$props;
    let { href = undefined } = $$props;
    let { target = undefined } = $$props;
    let { rel = undefined } = $$props;
    let { download = undefined } = $$props;
    const getWebComponent = () => __ref;
    svelte_1.onMount(() => {
        __mounted = true;
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(6, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function rux_menu_item_binding($$value) {
        internal_1.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
            __ref = $$value;
            $$invalidate(6, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ('disabled' in $$props)
            $$invalidate(0, disabled = $$props.disabled);
        if ('value' in $$props)
            $$invalidate(1, value = $$props.value);
        if ('href' in $$props)
            $$invalidate(2, href = $$props.href);
        if ('target' in $$props)
            $$invalidate(3, target = $$props.target);
        if ('rel' in $$props)
            $$invalidate(4, rel = $$props.rel);
        if ('download' in $$props)
            $$invalidate(5, download = $$props.download);
        if ('$$scope' in $$props)
            $$invalidate(9, $$scope = $$props.$$scope);
    };
    return [
        disabled,
        value,
        href,
        target,
        rel,
        download,
        __ref,
        onEvent,
        getWebComponent,
        $$scope,
        slots,
        rux_menu_item_binding
    ];
}
class RuxMenuItem extends internal_1.SvelteComponent {
    constructor(options) {
        super();
        internal_1.init(this, options, instance, create_fragment, internal_1.safe_not_equal, {
            disabled: 0,
            value: 1,
            href: 2,
            target: 3,
            rel: 4,
            download: 5,
            getWebComponent: 8
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
    get value() {
        return this.$$.ctx[1];
    }
    set value(value) {
        this.$$set({ value });
        internal_1.flush();
    }
    get href() {
        return this.$$.ctx[2];
    }
    set href(href) {
        this.$$set({ href });
        internal_1.flush();
    }
    get target() {
        return this.$$.ctx[3];
    }
    set target(target) {
        this.$$set({ target });
        internal_1.flush();
    }
    get rel() {
        return this.$$.ctx[4];
    }
    set rel(rel) {
        this.$$set({ rel });
        internal_1.flush();
    }
    get download() {
        return this.$$.ctx[5];
    }
    set download(download) {
        this.$$set({ download });
        internal_1.flush();
    }
    get getWebComponent() {
        return this.$$.ctx[8];
    }
}
exports.default = RuxMenuItem;
//# sourceMappingURL=RuxMenuItem.js.map