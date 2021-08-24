import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLaptopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLaptop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLaptop["size"];
}
interface RuxIconLaptopEvents {
}
interface RuxIconLaptopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLaptop extends SvelteComponent {
    $$prop_def: RuxIconLaptopProps;
    $$events_def: RuxIconLaptopEvents;
    $$slot_def: RuxIconLaptopSlots;
    $on<K extends keyof RuxIconLaptopEvents>(type: K, callback: (e: RuxIconLaptopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLaptopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLaptopElement | undefined;
}
export default RuxIconLaptop;
