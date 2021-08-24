import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSimCardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSimCard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSimCard["size"];
}
interface RuxIconSimCardEvents {
}
interface RuxIconSimCardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSimCard extends SvelteComponent {
    $$prop_def: RuxIconSimCardProps;
    $$events_def: RuxIconSimCardEvents;
    $$slot_def: RuxIconSimCardSlots;
    $on<K extends keyof RuxIconSimCardEvents>(type: K, callback: (e: RuxIconSimCardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSimCardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSimCardElement | undefined;
}
export default RuxIconSimCard;
