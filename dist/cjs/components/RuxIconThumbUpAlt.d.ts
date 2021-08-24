import { Components } from '@astrouxds/astro-web-components';
interface RuxIconThumbUpAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconThumbUpAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconThumbUpAlt["size"];
}
interface RuxIconThumbUpAltEvents {
}
interface RuxIconThumbUpAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconThumbUpAlt extends SvelteComponent {
    $$prop_def: RuxIconThumbUpAltProps;
    $$events_def: RuxIconThumbUpAltEvents;
    $$slot_def: RuxIconThumbUpAltSlots;
    $on<K extends keyof RuxIconThumbUpAltEvents>(type: K, callback: (e: RuxIconThumbUpAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconThumbUpAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconThumbUpAltElement | undefined;
}
export default RuxIconThumbUpAlt;
