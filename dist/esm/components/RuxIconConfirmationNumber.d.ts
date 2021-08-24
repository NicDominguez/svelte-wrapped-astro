import { Components } from '@astrouxds/astro-web-components';
interface RuxIconConfirmationNumberProps {
    /** The fill color for the icon */
    color?: Components.RuxIconConfirmationNumber["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconConfirmationNumber["size"];
}
interface RuxIconConfirmationNumberEvents {
}
interface RuxIconConfirmationNumberSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconConfirmationNumber extends SvelteComponent {
    $$prop_def: RuxIconConfirmationNumberProps;
    $$events_def: RuxIconConfirmationNumberEvents;
    $$slot_def: RuxIconConfirmationNumberSlots;
    $on<K extends keyof RuxIconConfirmationNumberEvents>(type: K, callback: (e: RuxIconConfirmationNumberEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconConfirmationNumberProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconConfirmationNumberElement | undefined;
}
export default RuxIconConfirmationNumber;
