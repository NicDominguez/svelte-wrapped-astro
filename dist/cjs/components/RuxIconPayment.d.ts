import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPaymentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPayment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPayment["size"];
}
interface RuxIconPaymentEvents {
}
interface RuxIconPaymentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPayment extends SvelteComponent {
    $$prop_def: RuxIconPaymentProps;
    $$events_def: RuxIconPaymentEvents;
    $$slot_def: RuxIconPaymentSlots;
    $on<K extends keyof RuxIconPaymentEvents>(type: K, callback: (e: RuxIconPaymentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPaymentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPaymentElement | undefined;
}
export default RuxIconPayment;
