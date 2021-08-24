import { Components } from '@astrouxds/astro-web-components';
interface RuxMonitoringIconProps {
    /** Styles the icon according to the Astro Status colors.
  Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`. */
    status?: Components.RuxMonitoringIcon["status"];
    /** Displays a label below the icon */
    label?: Components.RuxMonitoringIcon["label"];
    /** Displays a smaller label underneath the icon label */
    sublabel?: Components.RuxMonitoringIcon["sublabel"];
    /** Displays an Astro icon matching this string. For a [full list of available icons,
  see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols) */
    icon?: Components.RuxMonitoringIcon["icon"];
    /** If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
  Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,
  `'1.5M'` for millions, `'1.5B'` for billions, and uses `'∞'` for one trillion or higher. */
    notifications?: Components.RuxMonitoringIcon["notifications"];
}
interface RuxMonitoringIconEvents {
}
interface RuxMonitoringIconSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxMonitoringIcon extends SvelteComponent {
    $$prop_def: RuxMonitoringIconProps;
    $$events_def: RuxMonitoringIconEvents;
    $$slot_def: RuxMonitoringIconSlots;
    $on<K extends keyof RuxMonitoringIconEvents>(type: K, callback: (e: RuxMonitoringIconEvents[K]) => any): () => void;
    $set($$props: Partial<RuxMonitoringIconProps>): void;
    constructor(options: any);
    get status(): any;
    set status(status: any);
    get label(): any;
    set label(label: any);
    get sublabel(): any;
    set sublabel(sublabel: any);
    get icon(): any;
    set icon(icon: any);
    get notifications(): any;
    set notifications(notifications: any);
    get getWebComponent(): HTMLRuxMonitoringIconElement | undefined;
}
export default RuxMonitoringIcon;
