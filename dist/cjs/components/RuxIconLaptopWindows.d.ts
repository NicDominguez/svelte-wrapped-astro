import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLaptopWindowsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLaptopWindows["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLaptopWindows["size"];
}
interface RuxIconLaptopWindowsEvents {
}
interface RuxIconLaptopWindowsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLaptopWindows extends SvelteComponent {
    $$prop_def: RuxIconLaptopWindowsProps;
    $$events_def: RuxIconLaptopWindowsEvents;
    $$slot_def: RuxIconLaptopWindowsSlots;
    $on<K extends keyof RuxIconLaptopWindowsEvents>(type: K, callback: (e: RuxIconLaptopWindowsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLaptopWindowsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLaptopWindowsElement | undefined;
}
export default RuxIconLaptopWindows;
