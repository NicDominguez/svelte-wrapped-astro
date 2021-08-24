import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLaptopChromebookProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLaptopChromebook["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLaptopChromebook["size"];
}
interface RuxIconLaptopChromebookEvents {
}
interface RuxIconLaptopChromebookSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLaptopChromebook extends SvelteComponent {
    $$prop_def: RuxIconLaptopChromebookProps;
    $$events_def: RuxIconLaptopChromebookEvents;
    $$slot_def: RuxIconLaptopChromebookSlots;
    $on<K extends keyof RuxIconLaptopChromebookEvents>(type: K, callback: (e: RuxIconLaptopChromebookEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLaptopChromebookProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLaptopChromebookElement | undefined;
}
export default RuxIconLaptopChromebook;
