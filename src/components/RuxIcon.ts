/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxIconProps {
  
  /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
  size?: Components.RuxIcon["size"]
  
  /** The icon name */
  icon?: Components.RuxIcon["icon"]
  
  /** The icon color */
  color?: Components.RuxIcon["color"]
  
  /** The icon SVG's title attribute. Used for accessibility. If none is provided, the icon name will be used. */
  label?: Components.RuxIcon["label"]
}

interface RuxIconEvents {
  
}

interface RuxIconSlots {
  default: any
}
  
/* generated by Svelte v3.42.3 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let rux_icon;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			rux_icon = element("rux-icon");
			if (default_slot) default_slot.c();
			set_custom_element_data(rux_icon, "size", /*size*/ ctx[0]);
			set_custom_element_data(rux_icon, "icon", /*icon*/ ctx[1]);
			set_custom_element_data(rux_icon, "color", /*color*/ ctx[2]);
			set_custom_element_data(rux_icon, "label", /*label*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, rux_icon, anchor);

			if (default_slot) {
				default_slot.m(rux_icon, null);
			}

			/*rux_icon_binding*/ ctx[8](rux_icon);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*size*/ 1) {
				set_custom_element_data(rux_icon, "size", /*size*/ ctx[0]);
			}

			if (!current || dirty & /*icon*/ 2) {
				set_custom_element_data(rux_icon, "icon", /*icon*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(rux_icon, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*label*/ 8) {
				set_custom_element_data(rux_icon, "label", /*label*/ ctx[3]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(rux_icon);
			if (default_slot) default_slot.d(detaching);
			/*rux_icon_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { size = undefined } = $$props;
	let { icon } = $$props;
	let { color = undefined } = $$props;
	let { label = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_icon_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('size' in $$props) $$invalidate(0, size = $$props.size);
		if ('icon' in $$props) $$invalidate(1, icon = $$props.icon);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('label' in $$props) $$invalidate(3, label = $$props.label);
		if ('$$scope' in $$props) $$invalidate(6, $$scope = $$props.$$scope);
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

class RuxIcon extends SvelteComponent {
  $$prop_def: RuxIconProps;
  $$events_def: RuxIconEvents;
  $$slot_def: RuxIconSlots;

  $on<K extends keyof RuxIconEvents>(type: K, callback: (e: RuxIconEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxIconProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			size: 0,
			icon: 1,
			color: 2,
			label: 3,
			getWebComponent: 5
		});
	}

	get size() {
		return this.$$.ctx[0];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get icon() {
		return this.$$.ctx[1];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get color() {
		return this.$$.ctx[2];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get label() {
		return this.$$.ctx[3];
	}

	set label(label) {
		this.$$set({ label });
		flush();
	}

	get getWebComponent(): HTMLRuxIconElement | undefined {
		return this.$$.ctx[5];
	}
}

export default RuxIcon;