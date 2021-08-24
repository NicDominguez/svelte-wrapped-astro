import { Components } from '@astrouxds/astro-web-components';
interface RuxMonitoringProgressIconProps {
    /** Displays a label below the icon */
    label?: Components.RuxMonitoringProgressIcon["label"];
    /** Displays a smaller label underneath the icon label */
    sublabel?: Components.RuxMonitoringProgressIcon["sublabel"];
    /** Items in this Array define thresholds for changing the status style of the progress icon.
  For each item in the Array, the icon will be styled with the given status while the progress value
  is less than or equal to the Array item’s threshold and greater than the next smallest item‘s threshold.
  Both progress and the Array items’ threshold values can be positive or negative.
  If no min is specified, the component assumes the Array's first status threshold begins at 0. */
    range?: Components.RuxMonitoringProgressIcon["range"];
    /** If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
  Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'`
  for millions, `'1.5B'` for billions, and `'∞'` for one trillion or higher. */
    notifications?: Components.RuxMonitoringProgressIcon["notifications"];
    /** Sets the minimum value for the progress range. When progress is this number, it reads 0%.
  When it is halfway between min and max, it will read 50%. */
    min?: Components.RuxMonitoringProgressIcon["min"];
    /** Sets the maximum value for the progress range. When progress is this number, it reads 100%.
  When it is halfway between min and max, it will read 50%. */
    max?: Components.RuxMonitoringProgressIcon["max"];
    /** Displays this value as a percentage of where it lies between min and max
  in the center of the donut graph and styles a proportional
  segment of the graph. Progress can be positive or negative (the later useful for countdowns).
  The progress value must exist within the thresholds specified in the range property below, and must be
  an integer. If a non-integer value is passed in, progress will default to 0. If progress ever
  becomes less than min or greater than max, it will be set to equal min or max respectively. */
    progress?: Components.RuxMonitoringProgressIcon["progress"];
}
interface RuxMonitoringProgressIconEvents {
}
interface RuxMonitoringProgressIconSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxMonitoringProgressIcon extends SvelteComponent {
    $$prop_def: RuxMonitoringProgressIconProps;
    $$events_def: RuxMonitoringProgressIconEvents;
    $$slot_def: RuxMonitoringProgressIconSlots;
    $on<K extends keyof RuxMonitoringProgressIconEvents>(type: K, callback: (e: RuxMonitoringProgressIconEvents[K]) => any): () => void;
    $set($$props: Partial<RuxMonitoringProgressIconProps>): void;
    constructor(options: any);
    get label(): any;
    set label(label: any);
    get sublabel(): any;
    set sublabel(sublabel: any);
    get range(): any;
    set range(range: any);
    get notifications(): any;
    set notifications(notifications: any);
    get min(): any;
    set min(min: any);
    get max(): any;
    set max(max: any);
    get progress(): any;
    set progress(progress: any);
    get getWebComponent(): HTMLRuxMonitoringProgressIconElement | undefined;
}
export default RuxMonitoringProgressIcon;
