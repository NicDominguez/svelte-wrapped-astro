/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxTabPanelProps {
  
}

interface RuxTabPanelEvents {
  
}

interface RuxTabPanelSlots {
  default: any
}
  
/* generated by Svelte v3.42.3 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let rux_tab_panel;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			rux_tab_panel = element("rux-tab-panel");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, rux_tab_panel, anchor);

			if (default_slot) {
				default_slot.m(rux_tab_panel, null);
			}

			/*rux_tab_panel_binding*/ ctx[4](rux_tab_panel);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[2],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[2])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null),
						null
					);
				}
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
			if (detaching) detach(rux_tab_panel);
			if (default_slot) default_slot.d(detaching);
			/*rux_tab_panel_binding*/ ctx[4](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(0, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_tab_panel_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [__ref, getWebComponent, $$scope, slots, rux_tab_panel_binding];
}

class RuxTabPanel extends SvelteComponent {
  $$prop_def: RuxTabPanelProps;
  $$events_def: RuxTabPanelEvents;
  $$slot_def: RuxTabPanelSlots;

  $on<K extends keyof RuxTabPanelEvents>(type: K, callback: (e: RuxTabPanelEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxTabPanelProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 1 });
	}

	get getWebComponent(): HTMLRuxTabPanelElement | undefined {
		return this.$$.ctx[1];
	}
}

export default RuxTabPanel;