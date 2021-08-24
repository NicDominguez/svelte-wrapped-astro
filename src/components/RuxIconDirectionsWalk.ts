/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxIconDirectionsWalkProps {
  
  /** The fill color for the icon */
  color?: Components.RuxIconDirectionsWalk["color"]
  
  /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
  size?: Components.RuxIconDirectionsWalk["size"]
}

interface RuxIconDirectionsWalkEvents {
  
}

interface RuxIconDirectionsWalkSlots {
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
	let rux_icon_directions_walk;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			rux_icon_directions_walk = element("rux-icon-directions-walk");
			if (default_slot) default_slot.c();
			set_custom_element_data(rux_icon_directions_walk, "color", /*color*/ ctx[0]);
			set_custom_element_data(rux_icon_directions_walk, "size", /*size*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, rux_icon_directions_walk, anchor);

			if (default_slot) {
				default_slot.m(rux_icon_directions_walk, null);
			}

			/*rux_icon_directions_walk_binding*/ ctx[6](rux_icon_directions_walk);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*color*/ 1) {
				set_custom_element_data(rux_icon_directions_walk, "color", /*color*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(rux_icon_directions_walk, "size", /*size*/ ctx[1]);
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
			if (detaching) detach(rux_icon_directions_walk);
			if (default_slot) default_slot.d(detaching);
			/*rux_icon_directions_walk_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_icon_directions_walk_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('color' in $$props) $$invalidate(0, color = $$props.color);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		color,
		size,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		rux_icon_directions_walk_binding
	];
}

class RuxIconDirectionsWalk extends SvelteComponent {
  $$prop_def: RuxIconDirectionsWalkProps;
  $$events_def: RuxIconDirectionsWalkEvents;
  $$slot_def: RuxIconDirectionsWalkSlots;

  $on<K extends keyof RuxIconDirectionsWalkEvents>(type: K, callback: (e: RuxIconDirectionsWalkEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxIconDirectionsWalkProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { color: 0, size: 1, getWebComponent: 3 });
	}

	get color() {
		return this.$$.ctx[0];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get getWebComponent(): HTMLRuxIconDirectionsWalkElement | undefined {
		return this.$$.ctx[3];
	}
}

export default RuxIconDirectionsWalk;