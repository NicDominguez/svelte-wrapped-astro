import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLineStyleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLineStyle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLineStyle["size"];
}
interface RuxIconLineStyleEvents {
}
interface RuxIconLineStyleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLineStyle extends SvelteComponent {
    $$prop_def: RuxIconLineStyleProps;
    $$events_def: RuxIconLineStyleEvents;
    $$slot_def: RuxIconLineStyleSlots;
    $on<K extends keyof RuxIconLineStyleEvents>(type: K, callback: (e: RuxIconLineStyleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLineStyleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLineStyleElement | undefined;
}
export default RuxIconLineStyle;
