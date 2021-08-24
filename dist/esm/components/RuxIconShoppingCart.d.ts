import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShoppingCartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShoppingCart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShoppingCart["size"];
}
interface RuxIconShoppingCartEvents {
}
interface RuxIconShoppingCartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShoppingCart extends SvelteComponent {
    $$prop_def: RuxIconShoppingCartProps;
    $$events_def: RuxIconShoppingCartEvents;
    $$slot_def: RuxIconShoppingCartSlots;
    $on<K extends keyof RuxIconShoppingCartEvents>(type: K, callback: (e: RuxIconShoppingCartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShoppingCartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShoppingCartElement | undefined;
}
export default RuxIconShoppingCart;
