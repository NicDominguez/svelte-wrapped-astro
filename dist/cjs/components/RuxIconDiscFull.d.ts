import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDiscFullProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDiscFull["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDiscFull["size"];
}
interface RuxIconDiscFullEvents {
}
interface RuxIconDiscFullSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDiscFull extends SvelteComponent {
    $$prop_def: RuxIconDiscFullProps;
    $$events_def: RuxIconDiscFullEvents;
    $$slot_def: RuxIconDiscFullSlots;
    $on<K extends keyof RuxIconDiscFullEvents>(type: K, callback: (e: RuxIconDiscFullEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDiscFullProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDiscFullElement | undefined;
}
export default RuxIconDiscFull;
