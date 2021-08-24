import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccessAlarmsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccessAlarms["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccessAlarms["size"];
}
interface RuxIconAccessAlarmsEvents {
}
interface RuxIconAccessAlarmsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccessAlarms extends SvelteComponent {
    $$prop_def: RuxIconAccessAlarmsProps;
    $$events_def: RuxIconAccessAlarmsEvents;
    $$slot_def: RuxIconAccessAlarmsSlots;
    $on<K extends keyof RuxIconAccessAlarmsEvents>(type: K, callback: (e: RuxIconAccessAlarmsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccessAlarmsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccessAlarmsElement | undefined;
}
export default RuxIconAccessAlarms;
