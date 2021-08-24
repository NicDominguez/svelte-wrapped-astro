import { Components } from '@astrouxds/astro-web-components';
interface RuxIconListAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconListAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconListAlt["size"];
}
interface RuxIconListAltEvents {
}
interface RuxIconListAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconListAlt extends SvelteComponent {
    $$prop_def: RuxIconListAltProps;
    $$events_def: RuxIconListAltEvents;
    $$slot_def: RuxIconListAltSlots;
    $on<K extends keyof RuxIconListAltEvents>(type: K, callback: (e: RuxIconListAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconListAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconListAltElement | undefined;
}
export default RuxIconListAlt;
