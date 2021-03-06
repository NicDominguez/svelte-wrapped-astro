/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@astrouxds/astro-web-components';


interface RuxMonitoringIconProps {
  
  /** Styles the icon according to the Astro Status colors.
Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`. */
  status?: Components.RuxMonitoringIcon["status"]
  
  /** Displays a label below the icon */
  label?: Components.RuxMonitoringIcon["label"]
  
  /** Displays a smaller label underneath the icon label */
  sublabel?: Components.RuxMonitoringIcon["sublabel"]
  
  /** Displays an Astro icon matching this string. For a [full list of available icons,
see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols) */
  icon?: Components.RuxMonitoringIcon["icon"]
  
  /** If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,
`'1.5M'` for millions, `'1.5B'` for billions, and uses `'∞'` for one trillion or higher. */
  notifications?: Components.RuxMonitoringIcon["notifications"]
}

interface RuxMonitoringIconEvents {
  
}

interface RuxMonitoringIconSlots {
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
	let rux_monitoring_icon;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			rux_monitoring_icon = element("rux-monitoring-icon");
			if (default_slot) default_slot.c();
			set_custom_element_data(rux_monitoring_icon, "status", /*status*/ ctx[0]);
			set_custom_element_data(rux_monitoring_icon, "label", /*label*/ ctx[1]);
			set_custom_element_data(rux_monitoring_icon, "sublabel", /*sublabel*/ ctx[2]);
			set_custom_element_data(rux_monitoring_icon, "icon", /*icon*/ ctx[3]);
			set_custom_element_data(rux_monitoring_icon, "notifications", /*notifications*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, rux_monitoring_icon, anchor);

			if (default_slot) {
				default_slot.m(rux_monitoring_icon, null);
			}

			/*rux_monitoring_icon_binding*/ ctx[9](rux_monitoring_icon);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*status*/ 1) {
				set_custom_element_data(rux_monitoring_icon, "status", /*status*/ ctx[0]);
			}

			if (!current || dirty & /*label*/ 2) {
				set_custom_element_data(rux_monitoring_icon, "label", /*label*/ ctx[1]);
			}

			if (!current || dirty & /*sublabel*/ 4) {
				set_custom_element_data(rux_monitoring_icon, "sublabel", /*sublabel*/ ctx[2]);
			}

			if (!current || dirty & /*icon*/ 8) {
				set_custom_element_data(rux_monitoring_icon, "icon", /*icon*/ ctx[3]);
			}

			if (!current || dirty & /*notifications*/ 16) {
				set_custom_element_data(rux_monitoring_icon, "notifications", /*notifications*/ ctx[4]);
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
			if (detaching) detach(rux_monitoring_icon);
			if (default_slot) default_slot.d(detaching);
			/*rux_monitoring_icon_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { status = undefined } = $$props;
	let { label } = $$props;
	let { sublabel = undefined } = $$props;
	let { icon } = $$props;
	let { notifications = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function rux_monitoring_icon_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('status' in $$props) $$invalidate(0, status = $$props.status);
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('sublabel' in $$props) $$invalidate(2, sublabel = $$props.sublabel);
		if ('icon' in $$props) $$invalidate(3, icon = $$props.icon);
		if ('notifications' in $$props) $$invalidate(4, notifications = $$props.notifications);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		status,
		label,
		sublabel,
		icon,
		notifications,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		rux_monitoring_icon_binding
	];
}

class RuxMonitoringIcon extends SvelteComponent {
  $$prop_def: RuxMonitoringIconProps;
  $$events_def: RuxMonitoringIconEvents;
  $$slot_def: RuxMonitoringIconSlots;

  $on<K extends keyof RuxMonitoringIconEvents>(type: K, callback: (e: RuxMonitoringIconEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RuxMonitoringIconProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			status: 0,
			label: 1,
			sublabel: 2,
			icon: 3,
			notifications: 4,
			getWebComponent: 6
		});
	}

	get status() {
		return this.$$.ctx[0];
	}

	set status(status) {
		this.$$set({ status });
		flush();
	}

	get label() {
		return this.$$.ctx[1];
	}

	set label(label) {
		this.$$set({ label });
		flush();
	}

	get sublabel() {
		return this.$$.ctx[2];
	}

	set sublabel(sublabel) {
		this.$$set({ sublabel });
		flush();
	}

	get icon() {
		return this.$$.ctx[3];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get notifications() {
		return this.$$.ctx[4];
	}

	set notifications(notifications) {
		this.$$set({ notifications });
		flush();
	}

	get getWebComponent(): HTMLRuxMonitoringIconElement | undefined {
		return this.$$.ctx[6];
	}
}

export default RuxMonitoringIcon;