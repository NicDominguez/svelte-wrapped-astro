import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddShoppingCartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddShoppingCart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddShoppingCart["size"];
}
interface RuxIconAddShoppingCartEvents {
}
interface RuxIconAddShoppingCartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddShoppingCart extends SvelteComponent {
    $$prop_def: RuxIconAddShoppingCartProps;
    $$events_def: RuxIconAddShoppingCartEvents;
    $$slot_def: RuxIconAddShoppingCartSlots;
    $on<K extends keyof RuxIconAddShoppingCartEvents>(type: K, callback: (e: RuxIconAddShoppingCartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddShoppingCartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddShoppingCartElement | undefined;
}
export default RuxIconAddShoppingCart;
