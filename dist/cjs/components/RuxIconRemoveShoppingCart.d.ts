import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRemoveShoppingCartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRemoveShoppingCart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRemoveShoppingCart["size"];
}
interface RuxIconRemoveShoppingCartEvents {
}
interface RuxIconRemoveShoppingCartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRemoveShoppingCart extends SvelteComponent {
    $$prop_def: RuxIconRemoveShoppingCartProps;
    $$events_def: RuxIconRemoveShoppingCartEvents;
    $$slot_def: RuxIconRemoveShoppingCartSlots;
    $on<K extends keyof RuxIconRemoveShoppingCartEvents>(type: K, callback: (e: RuxIconRemoveShoppingCartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRemoveShoppingCartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRemoveShoppingCartElement | undefined;
}
export default RuxIconRemoveShoppingCart;
