import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEventProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEvent["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEvent["size"];
}
interface RuxIconEventEvents {
}
interface RuxIconEventSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEvent extends SvelteComponent {
    $$prop_def: RuxIconEventProps;
    $$events_def: RuxIconEventEvents;
    $$slot_def: RuxIconEventSlots;
    $on<K extends keyof RuxIconEventEvents>(type: K, callback: (e: RuxIconEventEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEventProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEventElement | undefined;
}
export default RuxIconEvent;
