import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAlarmOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAlarmOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAlarmOff["size"];
}
interface RuxIconAlarmOffEvents {
}
interface RuxIconAlarmOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAlarmOff extends SvelteComponent {
    $$prop_def: RuxIconAlarmOffProps;
    $$events_def: RuxIconAlarmOffEvents;
    $$slot_def: RuxIconAlarmOffSlots;
    $on<K extends keyof RuxIconAlarmOffEvents>(type: K, callback: (e: RuxIconAlarmOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAlarmOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAlarmOffElement | undefined;
}
export default RuxIconAlarmOff;
