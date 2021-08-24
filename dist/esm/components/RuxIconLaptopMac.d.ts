import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLaptopMacProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLaptopMac["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLaptopMac["size"];
}
interface RuxIconLaptopMacEvents {
}
interface RuxIconLaptopMacSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLaptopMac extends SvelteComponent {
    $$prop_def: RuxIconLaptopMacProps;
    $$events_def: RuxIconLaptopMacEvents;
    $$slot_def: RuxIconLaptopMacSlots;
    $on<K extends keyof RuxIconLaptopMacEvents>(type: K, callback: (e: RuxIconLaptopMacEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLaptopMacProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLaptopMacElement | undefined;
}
export default RuxIconLaptopMac;
