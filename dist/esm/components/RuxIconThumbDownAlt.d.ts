import { Components } from '@astrouxds/astro-web-components';
interface RuxIconThumbDownAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconThumbDownAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconThumbDownAlt["size"];
}
interface RuxIconThumbDownAltEvents {
}
interface RuxIconThumbDownAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconThumbDownAlt extends SvelteComponent {
    $$prop_def: RuxIconThumbDownAltProps;
    $$events_def: RuxIconThumbDownAltEvents;
    $$slot_def: RuxIconThumbDownAltSlots;
    $on<K extends keyof RuxIconThumbDownAltEvents>(type: K, callback: (e: RuxIconThumbDownAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconThumbDownAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconThumbDownAltElement | undefined;
}
export default RuxIconThumbDownAlt;
