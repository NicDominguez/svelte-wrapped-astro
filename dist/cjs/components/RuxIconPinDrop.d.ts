import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPinDropProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPinDrop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPinDrop["size"];
}
interface RuxIconPinDropEvents {
}
interface RuxIconPinDropSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPinDrop extends SvelteComponent {
    $$prop_def: RuxIconPinDropProps;
    $$events_def: RuxIconPinDropEvents;
    $$slot_def: RuxIconPinDropSlots;
    $on<K extends keyof RuxIconPinDropEvents>(type: K, callback: (e: RuxIconPinDropEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPinDropProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPinDropElement | undefined;
}
export default RuxIconPinDrop;
