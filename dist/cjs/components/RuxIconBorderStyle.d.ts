import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderStyleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderStyle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderStyle["size"];
}
interface RuxIconBorderStyleEvents {
}
interface RuxIconBorderStyleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderStyle extends SvelteComponent {
    $$prop_def: RuxIconBorderStyleProps;
    $$events_def: RuxIconBorderStyleEvents;
    $$slot_def: RuxIconBorderStyleSlots;
    $on<K extends keyof RuxIconBorderStyleEvents>(type: K, callback: (e: RuxIconBorderStyleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderStyleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderStyleElement | undefined;
}
export default RuxIconBorderStyle;
