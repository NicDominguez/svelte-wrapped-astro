import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShop["size"];
}
interface RuxIconShopEvents {
}
interface RuxIconShopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShop extends SvelteComponent {
    $$prop_def: RuxIconShopProps;
    $$events_def: RuxIconShopEvents;
    $$slot_def: RuxIconShopSlots;
    $on<K extends keyof RuxIconShopEvents>(type: K, callback: (e: RuxIconShopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShopElement | undefined;
}
export default RuxIconShop;
