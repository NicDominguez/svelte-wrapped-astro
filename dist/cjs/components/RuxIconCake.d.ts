import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCakeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCake["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCake["size"];
}
interface RuxIconCakeEvents {
}
interface RuxIconCakeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCake extends SvelteComponent {
    $$prop_def: RuxIconCakeProps;
    $$events_def: RuxIconCakeEvents;
    $$slot_def: RuxIconCakeSlots;
    $on<K extends keyof RuxIconCakeEvents>(type: K, callback: (e: RuxIconCakeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCakeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCakeElement | undefined;
}
export default RuxIconCake;
