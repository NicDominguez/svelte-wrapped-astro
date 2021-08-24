/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxProgressProps {
  
  /** Current progress value between 0 and 100 (or the max, if defined below). */
  value?: Components.RuxProgress["value"]
  
  /** For progress bars where progress bars have a maximum value greater or less than 100 */
  max?: Components.RuxProgress["max"]
  
  /** Displays text output of progress as a percentage. Note: when using a max value other than 100 output is displated as value/max (e.g., 1450/2000) */
  hideLabel?: Components.RuxProgress["hideLabel"]
}

interface RuxProgressEvents {
  
}

interface RuxProgressSlots {
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
	let rux_progress;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			rux_progress = element("rux-progress");
			if (default_slot) default_slot.c();
			set_custom_element_data(rux_progress, "value", /*value*/ ctx[0]);
			set_custom_element_data(rux_progress, "max", /*max*/ ctx[1]);
			set_custom_element_data(rux_progress, "hide-label", /*hideLabel*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, rux_progress, anchor);

			if (default_slot) {
				default_slot.m(rux_progress, null);
			}

			/*rux_progress_binding*/ ctx[7](rux_progress);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*value*/ 1) {
				set_custom_element_data(rux_progress, "value", /*value*/ ctx[0]);
			}

			if (!current || dirty & /*max*/ 2) {
				set_custom_element_data(rux_progress, "max", /*max*/ ctx[1]);
			}

			if (!current || dirty & /*hideLabel*/ 4) {
				set_custom_element_data(rux_progress, "hide-label", /*hideLabel*/ ctx[2]);
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
			if (detaching) detach(rux_progress);
			if (default_slot) default_slot.d(detaching);
			/*rux_progress_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { value = undefined } = $$props;
	let { max = undefined } = $$props;
	let { hideLabel = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_progress_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('max' in $$props) $$invalidate(1, max = $$props.max);
		if ('hideLabel' in $$props) $$invalidate(2, hideLabel = $$props.hideLabel);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		value,
		max,
		hideLabel,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		rux_progress_binding
	];
}

class RuxProgress extends SvelteComponent {
  $$prop_def: RuxProgressProps;
  $$events_def: RuxProgressEvents;
  $$slot_def: RuxProgressSlots;

  $on<K extends keyof RuxProgressEvents>(type: K, callback: (e: RuxProgressEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxProgressProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			max: 1,
			hideLabel: 2,
			getWebComponent: 4
		});
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get max() {
		return this.$$.ctx[1];
	}

	set max(max) {
		this.$$set({ max });
		flush();
	}

	get hideLabel() {
		return this.$$.ctx[2];
	}

	set hideLabel(hideLabel) {
		this.$$set({ hideLabel });
		flush();
	}

	get getWebComponent(): HTMLRuxProgressElement | undefined {
		return this.$$.ctx[4];
	}
}

export default RuxProgress;