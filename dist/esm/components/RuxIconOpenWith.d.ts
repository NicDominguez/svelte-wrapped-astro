import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOpenWithProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOpenWith["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOpenWith["size"];
}
interface RuxIconOpenWithEvents {
}
interface RuxIconOpenWithSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOpenWith extends SvelteComponent {
    $$prop_def: RuxIconOpenWithProps;
    $$events_def: RuxIconOpenWithEvents;
    $$slot_def: RuxIconOpenWithSlots;
    $on<K extends keyof RuxIconOpenWithEvents>(type: K, callback: (e: RuxIconOpenWithEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOpenWithProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOpenWithElement | undefined;
}
export default RuxIconOpenWith;
