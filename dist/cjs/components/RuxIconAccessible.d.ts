import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccessibleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccessible["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccessible["size"];
}
interface RuxIconAccessibleEvents {
}
interface RuxIconAccessibleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccessible extends SvelteComponent {
    $$prop_def: RuxIconAccessibleProps;
    $$events_def: RuxIconAccessibleEvents;
    $$slot_def: RuxIconAccessibleSlots;
    $on<K extends keyof RuxIconAccessibleEvents>(type: K, callback: (e: RuxIconAccessibleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccessibleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccessibleElement | undefined;
}
export default RuxIconAccessible;
