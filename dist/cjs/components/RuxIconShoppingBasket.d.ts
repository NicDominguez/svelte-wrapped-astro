import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShoppingBasketProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShoppingBasket["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShoppingBasket["size"];
}
interface RuxIconShoppingBasketEvents {
}
interface RuxIconShoppingBasketSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShoppingBasket extends SvelteComponent {
    $$prop_def: RuxIconShoppingBasketProps;
    $$events_def: RuxIconShoppingBasketEvents;
    $$slot_def: RuxIconShoppingBasketSlots;
    $on<K extends keyof RuxIconShoppingBasketEvents>(type: K, callback: (e: RuxIconShoppingBasketEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShoppingBasketProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShoppingBasketElement | undefined;
}
export default RuxIconShoppingBasket;
