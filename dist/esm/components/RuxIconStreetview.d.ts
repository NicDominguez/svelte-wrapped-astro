import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStreetviewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStreetview["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStreetview["size"];
}
interface RuxIconStreetviewEvents {
}
interface RuxIconStreetviewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStreetview extends SvelteComponent {
    $$prop_def: RuxIconStreetviewProps;
    $$events_def: RuxIconStreetviewEvents;
    $$slot_def: RuxIconStreetviewSlots;
    $on<K extends keyof RuxIconStreetviewEvents>(type: K, callback: (e: RuxIconStreetviewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStreetviewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStreetviewElement | undefined;
}
export default RuxIconStreetview;
