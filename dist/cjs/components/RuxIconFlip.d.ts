import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlipProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlip["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlip["size"];
}
interface RuxIconFlipEvents {
}
interface RuxIconFlipSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlip extends SvelteComponent {
    $$prop_def: RuxIconFlipProps;
    $$events_def: RuxIconFlipEvents;
    $$slot_def: RuxIconFlipSlots;
    $on<K extends keyof RuxIconFlipEvents>(type: K, callback: (e: RuxIconFlipEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlipProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlipElement | undefined;
}
export default RuxIconFlip;
