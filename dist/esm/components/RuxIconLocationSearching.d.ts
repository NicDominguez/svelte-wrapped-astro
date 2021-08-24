import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocationSearchingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocationSearching["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocationSearching["size"];
}
interface RuxIconLocationSearchingEvents {
}
interface RuxIconLocationSearchingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocationSearching extends SvelteComponent {
    $$prop_def: RuxIconLocationSearchingProps;
    $$events_def: RuxIconLocationSearchingEvents;
    $$slot_def: RuxIconLocationSearchingSlots;
    $on<K extends keyof RuxIconLocationSearchingEvents>(type: K, callback: (e: RuxIconLocationSearchingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocationSearchingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocationSearchingElement | undefined;
}
export default RuxIconLocationSearching;
