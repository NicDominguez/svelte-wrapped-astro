import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCreditCardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCreditCard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCreditCard["size"];
}
interface RuxIconCreditCardEvents {
}
interface RuxIconCreditCardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCreditCard extends SvelteComponent {
    $$prop_def: RuxIconCreditCardProps;
    $$events_def: RuxIconCreditCardEvents;
    $$slot_def: RuxIconCreditCardSlots;
    $on<K extends keyof RuxIconCreditCardEvents>(type: K, callback: (e: RuxIconCreditCardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCreditCardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCreditCardElement | undefined;
}
export default RuxIconCreditCard;
