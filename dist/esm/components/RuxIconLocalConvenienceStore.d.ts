import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalConvenienceStoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalConvenienceStore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalConvenienceStore["size"];
}
interface RuxIconLocalConvenienceStoreEvents {
}
interface RuxIconLocalConvenienceStoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalConvenienceStore extends SvelteComponent {
    $$prop_def: RuxIconLocalConvenienceStoreProps;
    $$events_def: RuxIconLocalConvenienceStoreEvents;
    $$slot_def: RuxIconLocalConvenienceStoreSlots;
    $on<K extends keyof RuxIconLocalConvenienceStoreEvents>(type: K, callback: (e: RuxIconLocalConvenienceStoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalConvenienceStoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalConvenienceStoreElement | undefined;
}
export default RuxIconLocalConvenienceStore;
