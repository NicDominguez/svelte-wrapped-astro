import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChildFriendlyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChildFriendly["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChildFriendly["size"];
}
interface RuxIconChildFriendlyEvents {
}
interface RuxIconChildFriendlySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChildFriendly extends SvelteComponent {
    $$prop_def: RuxIconChildFriendlyProps;
    $$events_def: RuxIconChildFriendlyEvents;
    $$slot_def: RuxIconChildFriendlySlots;
    $on<K extends keyof RuxIconChildFriendlyEvents>(type: K, callback: (e: RuxIconChildFriendlyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChildFriendlyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChildFriendlyElement | undefined;
}
export default RuxIconChildFriendly;
