import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReceiptProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReceipt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReceipt["size"];
}
interface RuxIconReceiptEvents {
}
interface RuxIconReceiptSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReceipt extends SvelteComponent {
    $$prop_def: RuxIconReceiptProps;
    $$events_def: RuxIconReceiptEvents;
    $$slot_def: RuxIconReceiptSlots;
    $on<K extends keyof RuxIconReceiptEvents>(type: K, callback: (e: RuxIconReceiptEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReceiptProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReceiptElement | undefined;
}
export default RuxIconReceipt;
