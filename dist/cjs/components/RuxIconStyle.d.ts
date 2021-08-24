import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStyleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStyle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStyle["size"];
}
interface RuxIconStyleEvents {
}
interface RuxIconStyleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStyle extends SvelteComponent {
    $$prop_def: RuxIconStyleProps;
    $$events_def: RuxIconStyleEvents;
    $$slot_def: RuxIconStyleSlots;
    $on<K extends keyof RuxIconStyleEvents>(type: K, callback: (e: RuxIconStyleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStyleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStyleElement | undefined;
}
export default RuxIconStyle;
