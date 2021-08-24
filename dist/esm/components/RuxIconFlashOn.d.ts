import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlashOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlashOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlashOn["size"];
}
interface RuxIconFlashOnEvents {
}
interface RuxIconFlashOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlashOn extends SvelteComponent {
    $$prop_def: RuxIconFlashOnProps;
    $$events_def: RuxIconFlashOnEvents;
    $$slot_def: RuxIconFlashOnSlots;
    $on<K extends keyof RuxIconFlashOnEvents>(type: K, callback: (e: RuxIconFlashOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlashOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlashOnElement | undefined;
}
export default RuxIconFlashOn;
