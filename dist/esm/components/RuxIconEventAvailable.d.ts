import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEventAvailableProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEventAvailable["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEventAvailable["size"];
}
interface RuxIconEventAvailableEvents {
}
interface RuxIconEventAvailableSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEventAvailable extends SvelteComponent {
    $$prop_def: RuxIconEventAvailableProps;
    $$events_def: RuxIconEventAvailableEvents;
    $$slot_def: RuxIconEventAvailableSlots;
    $on<K extends keyof RuxIconEventAvailableEvents>(type: K, callback: (e: RuxIconEventAvailableEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEventAvailableProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEventAvailableElement | undefined;
}
export default RuxIconEventAvailable;
