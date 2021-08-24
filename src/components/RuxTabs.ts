/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxTabsProps {
  
  /** If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses. */
  small?: Components.RuxTabs["small"]
}

interface RuxTabsEvents {
  
}

interface RuxTabsSlots {
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
	let rux_tabs;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			rux_tabs = element("rux-tabs");
			if (default_slot) default_slot.c();
			set_custom_element_data(rux_tabs, "small", /*small*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, rux_tabs, anchor);

			if (default_slot) {
				default_slot.m(rux_tabs, null);
			}

			/*rux_tabs_binding*/ ctx[5](rux_tabs);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*small*/ 1) {
				set_custom_element_data(rux_tabs, "small", /*small*/ ctx[0]);
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
			if (detaching) detach(rux_tabs);
			if (default_slot) default_slot.d(detaching);
			/*rux_tabs_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { small = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_tabs_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('small' in $$props) $$invalidate(0, small = $$props.small);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [small, __ref, getWebComponent, $$scope, slots, rux_tabs_binding];
}

class RuxTabs extends SvelteComponent {
  $$prop_def: RuxTabsProps;
  $$events_def: RuxTabsEvents;
  $$slot_def: RuxTabsSlots;

  $on<K extends keyof RuxTabsEvents>(type: K, callback: (e: RuxTabsEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxTabsProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { small: 0, getWebComponent: 2 });
	}

	get small() {
		return this.$$.ctx[0];
	}

	set small(small) {
		this.$$set({ small });
		flush();
	}

	get getWebComponent(): HTMLRuxTabsElement | undefined {
		return this.$$.ctx[2];
	}
}

export default RuxTabs;