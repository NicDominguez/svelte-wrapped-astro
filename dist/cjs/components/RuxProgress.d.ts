import { Components } from '@astrouxds/astro-web-components';
interface RuxProgressProps {
    /** Current progress value between 0 and 100 (or the max, if defined below). */
    value?: Components.RuxProgress["value"];
    /** For progress bars where progress bars have a maximum value greater or less than 100 */
    max?: Components.RuxProgress["max"];
    /** Displays text output of progress as a percentage. Note: when using a max value other than 100 output is displated as value/max (e.g., 1450/2000) */
    hideLabel?: Components.RuxProgress["hideLabel"];
}
interface RuxProgressEvents {
}
interface RuxProgressSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxProgress extends SvelteComponent {
    $$prop_def: RuxProgressProps;
    $$events_def: RuxProgressEvents;
    $$slot_def: RuxProgressSlots;
    $on<K extends keyof RuxProgressEvents>(type: K, callback: (e: RuxProgressEvents[K]) => any): () => void;
    $set($$props: Partial<RuxProgressProps>): void;
    constructor(options: any);
    get value(): any;
    set value(value: any);
    get max(): any;
    set max(max: any);
    get hideLabel(): any;
    set hideLabel(hideLabel: any);
    get getWebComponent(): HTMLRuxProgressElement | undefined;
}
export default RuxProgress;
