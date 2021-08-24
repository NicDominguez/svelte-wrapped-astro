import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlashAutoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlashAuto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlashAuto["size"];
}
interface RuxIconFlashAutoEvents {
}
interface RuxIconFlashAutoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlashAuto extends SvelteComponent {
    $$prop_def: RuxIconFlashAutoProps;
    $$events_def: RuxIconFlashAutoEvents;
    $$slot_def: RuxIconFlashAutoSlots;
    $on<K extends keyof RuxIconFlashAutoEvents>(type: K, callback: (e: RuxIconFlashAutoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlashAutoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlashAutoElement | undefined;
}
export default RuxIconFlashAuto;
