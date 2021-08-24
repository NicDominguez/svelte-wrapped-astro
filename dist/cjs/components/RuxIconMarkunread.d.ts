import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMarkunreadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMarkunread["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMarkunread["size"];
}
interface RuxIconMarkunreadEvents {
}
interface RuxIconMarkunreadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMarkunread extends SvelteComponent {
    $$prop_def: RuxIconMarkunreadProps;
    $$events_def: RuxIconMarkunreadEvents;
    $$slot_def: RuxIconMarkunreadSlots;
    $on<K extends keyof RuxIconMarkunreadEvents>(type: K, callback: (e: RuxIconMarkunreadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMarkunreadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMarkunreadElement | undefined;
}
export default RuxIconMarkunread;
