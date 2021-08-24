import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMapProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMap["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMap["size"];
}
interface RuxIconMapEvents {
}
interface RuxIconMapSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMap extends SvelteComponent {
    $$prop_def: RuxIconMapProps;
    $$events_def: RuxIconMapEvents;
    $$slot_def: RuxIconMapSlots;
    $on<K extends keyof RuxIconMapEvents>(type: K, callback: (e: RuxIconMapEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMapProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMapElement | undefined;
}
export default RuxIconMap;
