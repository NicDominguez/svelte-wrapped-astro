import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlipToFrontProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlipToFront["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlipToFront["size"];
}
interface RuxIconFlipToFrontEvents {
}
interface RuxIconFlipToFrontSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlipToFront extends SvelteComponent {
    $$prop_def: RuxIconFlipToFrontProps;
    $$events_def: RuxIconFlipToFrontEvents;
    $$slot_def: RuxIconFlipToFrontSlots;
    $on<K extends keyof RuxIconFlipToFrontEvents>(type: K, callback: (e: RuxIconFlipToFrontEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlipToFrontProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlipToFrontElement | undefined;
}
export default RuxIconFlipToFront;
