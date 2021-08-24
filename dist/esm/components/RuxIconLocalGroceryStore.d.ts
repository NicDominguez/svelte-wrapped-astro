import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalGroceryStoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalGroceryStore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalGroceryStore["size"];
}
interface RuxIconLocalGroceryStoreEvents {
}
interface RuxIconLocalGroceryStoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalGroceryStore extends SvelteComponent {
    $$prop_def: RuxIconLocalGroceryStoreProps;
    $$events_def: RuxIconLocalGroceryStoreEvents;
    $$slot_def: RuxIconLocalGroceryStoreSlots;
    $on<K extends keyof RuxIconLocalGroceryStoreEvents>(type: K, callback: (e: RuxIconLocalGroceryStoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalGroceryStoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalGroceryStoreElement | undefined;
}
export default RuxIconLocalGroceryStore;
