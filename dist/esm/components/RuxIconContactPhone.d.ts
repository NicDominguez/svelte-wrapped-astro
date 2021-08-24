import { Components } from '@astrouxds/astro-web-components';
interface RuxIconContactPhoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconContactPhone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconContactPhone["size"];
}
interface RuxIconContactPhoneEvents {
}
interface RuxIconContactPhoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconContactPhone extends SvelteComponent {
    $$prop_def: RuxIconContactPhoneProps;
    $$events_def: RuxIconContactPhoneEvents;
    $$slot_def: RuxIconContactPhoneSlots;
    $on<K extends keyof RuxIconContactPhoneEvents>(type: K, callback: (e: RuxIconContactPhoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconContactPhoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconContactPhoneElement | undefined;
}
export default RuxIconContactPhone;
