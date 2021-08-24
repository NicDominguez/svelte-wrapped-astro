/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxMonitoringProgressIconProps {
  
  /** Displays a label below the icon */
  label?: Components.RuxMonitoringProgressIcon["label"]
  
  /** Displays a smaller label underneath the icon label */
  sublabel?: Components.RuxMonitoringProgressIcon["sublabel"]
  
  /** Items in this Array define thresholds for changing the status style of the progress icon.
For each item in the Array, the icon will be styled with the given status while the progress value
is less than or equal to the Array item’s threshold and greater than the next smallest item‘s threshold.
Both progress and the Array items’ threshold values can be positive or negative.
If no min is specified, the component assumes the Array's first status threshold begins at 0. */
  range?: Components.RuxMonitoringProgressIcon["range"]
  
  /** If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'`
for millions, `'1.5B'` for billions, and `'∞'` for one trillion or higher. */
  notifications?: Components.RuxMonitoringProgressIcon["notifications"]
  
  /** Sets the minimum value for the progress range. When progress is this number, it reads 0%.
When it is halfway between min and max, it will read 50%. */
  min?: Components.RuxMonitoringProgressIcon["min"]
  
  /** Sets the maximum value for the progress range. When progress is this number, it reads 100%.
When it is halfway between min and max, it will read 50%. */
  max?: Components.RuxMonitoringProgressIcon["max"]
  
  /** Displays this value as a percentage of where it lies between min and max
in the center of the donut graph and styles a proportional
segment of the graph. Progress can be positive or negative (the later useful for countdowns).
The progress value must exist within the thresholds specified in the range property below, and must be
an integer. If a non-integer value is passed in, progress will default to 0. If progress ever
becomes less than min or greater than max, it will be set to equal min or max respectively. */
  progress?: Components.RuxMonitoringProgressIcon["progress"]
}

interface RuxMonitoringProgressIconEvents {
  
}

interface RuxMonitoringProgressIconSlots {
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
	let rux_monitoring_progress_icon;
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			rux_monitoring_progress_icon = element("rux-monitoring-progress-icon");
			if (default_slot) default_slot.c();
			set_custom_element_data(rux_monitoring_progress_icon, "label", /*label*/ ctx[0]);
			set_custom_element_data(rux_monitoring_progress_icon, "sublabel", /*sublabel*/ ctx[1]);
			set_custom_element_data(rux_monitoring_progress_icon, "notifications", /*notifications*/ ctx[2]);
			set_custom_element_data(rux_monitoring_progress_icon, "min", /*min*/ ctx[3]);
			set_custom_element_data(rux_monitoring_progress_icon, "max", /*max*/ ctx[4]);
			set_custom_element_data(rux_monitoring_progress_icon, "progress", /*progress*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, rux_monitoring_progress_icon, anchor);

			if (default_slot) {
				default_slot.m(rux_monitoring_progress_icon, null);
			}

			/*rux_monitoring_progress_icon_binding*/ ctx[12](rux_monitoring_progress_icon);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*label*/ 1) {
				set_custom_element_data(rux_monitoring_progress_icon, "label", /*label*/ ctx[0]);
			}

			if (!current || dirty & /*sublabel*/ 2) {
				set_custom_element_data(rux_monitoring_progress_icon, "sublabel", /*sublabel*/ ctx[1]);
			}

			if (!current || dirty & /*notifications*/ 4) {
				set_custom_element_data(rux_monitoring_progress_icon, "notifications", /*notifications*/ ctx[2]);
			}

			if (!current || dirty & /*min*/ 8) {
				set_custom_element_data(rux_monitoring_progress_icon, "min", /*min*/ ctx[3]);
			}

			if (!current || dirty & /*max*/ 16) {
				set_custom_element_data(rux_monitoring_progress_icon, "max", /*max*/ ctx[4]);
			}

			if (!current || dirty & /*progress*/ 32) {
				set_custom_element_data(rux_monitoring_progress_icon, "progress", /*progress*/ ctx[5]);
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
			if (detaching) detach(rux_monitoring_progress_icon);
			if (default_slot) default_slot.d(detaching);
			/*rux_monitoring_progress_icon_binding*/ ctx[12](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { label = undefined } = $$props;
	let { sublabel = undefined } = $$props;
	let { range } = $$props;
	let { notifications = undefined } = $$props;
	let { min = undefined } = $$props;
	let { max = undefined } = $$props;
	let { progress = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(9, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_monitoring_progress_icon_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('label' in $$props) $$invalidate(0, label = $$props.label);
		if ('sublabel' in $$props) $$invalidate(1, sublabel = $$props.sublabel);
		if ('range' in $$props) $$invalidate(7, range = $$props.range);
		if ('notifications' in $$props) $$invalidate(2, notifications = $$props.notifications);
		if ('min' in $$props) $$invalidate(3, min = $$props.min);
		if ('max' in $$props) $$invalidate(4, max = $$props.max);
		if ('progress' in $$props) $$invalidate(5, progress = $$props.progress);
		if ('$$scope' in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, range*/ 640) {
			$: if (__mounted) setProp('range', range);
		}
	};

	return [
		label,
		sublabel,
		notifications,
		min,
		max,
		progress,
		__ref,
		range,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		rux_monitoring_progress_icon_binding
	];
}

class RuxMonitoringProgressIcon extends SvelteComponent {
  $$prop_def: RuxMonitoringProgressIconProps;
  $$events_def: RuxMonitoringProgressIconEvents;
  $$slot_def: RuxMonitoringProgressIconSlots;

  $on<K extends keyof RuxMonitoringProgressIconEvents>(type: K, callback: (e: RuxMonitoringProgressIconEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxMonitoringProgressIconProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			label: 0,
			sublabel: 1,
			range: 7,
			notifications: 2,
			min: 3,
			max: 4,
			progress: 5,
			getWebComponent: 8
		});
	}

	get label() {
		return this.$$.ctx[0];
	}

	set label(label) {
		this.$$set({ label });
		flush();
	}

	get sublabel() {
		return this.$$.ctx[1];
	}

	set sublabel(sublabel) {
		this.$$set({ sublabel });
		flush();
	}

	get range() {
		return this.$$.ctx[7];
	}

	set range(range) {
		this.$$set({ range });
		flush();
	}

	get notifications() {
		return this.$$.ctx[2];
	}

	set notifications(notifications) {
		this.$$set({ notifications });
		flush();
	}

	get min() {
		return this.$$.ctx[3];
	}

	set min(min) {
		this.$$set({ min });
		flush();
	}

	get max() {
		return this.$$.ctx[4];
	}

	set max(max) {
		this.$$set({ max });
		flush();
	}

	get progress() {
		return this.$$.ctx[5];
	}

	set progress(progress) {
		this.$$set({ progress });
		flush();
	}

	get getWebComponent(): HTMLRuxMonitoringProgressIconElement | undefined {
		return this.$$.ctx[8];
	}
}

export default RuxMonitoringProgressIcon;