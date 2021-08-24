import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFastfoodProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFastfood["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFastfood["size"];
}
interface RuxIconFastfoodEvents {
}
interface RuxIconFastfoodSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFastfood extends SvelteComponent {
    $$prop_def: RuxIconFastfoodProps;
    $$events_def: RuxIconFastfoodEvents;
    $$slot_def: RuxIconFastfoodSlots;
    $on<K extends keyof RuxIconFastfoodEvents>(type: K, callback: (e: RuxIconFastfoodEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFastfoodProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFastfoodElement | undefined;
}
export default RuxIconFastfood;
