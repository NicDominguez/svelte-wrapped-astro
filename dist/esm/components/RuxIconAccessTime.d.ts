import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccessTimeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccessTime["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccessTime["size"];
}
interface RuxIconAccessTimeEvents {
}
interface RuxIconAccessTimeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccessTime extends SvelteComponent {
    $$prop_def: RuxIconAccessTimeProps;
    $$events_def: RuxIconAccessTimeEvents;
    $$slot_def: RuxIconAccessTimeSlots;
    $on<K extends keyof RuxIconAccessTimeEvents>(type: K, callback: (e: RuxIconAccessTimeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccessTimeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccessTimeElement | undefined;
}
export default RuxIconAccessTime;
