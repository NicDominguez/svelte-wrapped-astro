import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLoyaltyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLoyalty["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLoyalty["size"];
}
interface RuxIconLoyaltyEvents {
}
interface RuxIconLoyaltySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLoyalty extends SvelteComponent {
    $$prop_def: RuxIconLoyaltyProps;
    $$events_def: RuxIconLoyaltyEvents;
    $$slot_def: RuxIconLoyaltySlots;
    $on<K extends keyof RuxIconLoyaltyEvents>(type: K, callback: (e: RuxIconLoyaltyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLoyaltyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLoyaltyElement | undefined;
}
export default RuxIconLoyalty;
