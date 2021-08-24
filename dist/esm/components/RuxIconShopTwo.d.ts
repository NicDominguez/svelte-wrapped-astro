import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShopTwoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShopTwo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShopTwo["size"];
}
interface RuxIconShopTwoEvents {
}
interface RuxIconShopTwoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShopTwo extends SvelteComponent {
    $$prop_def: RuxIconShopTwoProps;
    $$events_def: RuxIconShopTwoEvents;
    $$slot_def: RuxIconShopTwoSlots;
    $on<K extends keyof RuxIconShopTwoEvents>(type: K, callback: (e: RuxIconShopTwoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShopTwoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShopTwoElement | undefined;
}
export default RuxIconShopTwo;
