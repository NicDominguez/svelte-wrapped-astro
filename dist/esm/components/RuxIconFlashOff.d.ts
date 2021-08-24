import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlashOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlashOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlashOff["size"];
}
interface RuxIconFlashOffEvents {
}
interface RuxIconFlashOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlashOff extends SvelteComponent {
    $$prop_def: RuxIconFlashOffProps;
    $$events_def: RuxIconFlashOffEvents;
    $$slot_def: RuxIconFlashOffSlots;
    $on<K extends keyof RuxIconFlashOffEvents>(type: K, callback: (e: RuxIconFlashOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlashOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlashOffElement | undefined;
}
export default RuxIconFlashOff;
