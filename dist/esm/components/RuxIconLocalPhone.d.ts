import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalPhoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalPhone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalPhone["size"];
}
interface RuxIconLocalPhoneEvents {
}
interface RuxIconLocalPhoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalPhone extends SvelteComponent {
    $$prop_def: RuxIconLocalPhoneProps;
    $$events_def: RuxIconLocalPhoneEvents;
    $$slot_def: RuxIconLocalPhoneSlots;
    $on<K extends keyof RuxIconLocalPhoneEvents>(type: K, callback: (e: RuxIconLocalPhoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalPhoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalPhoneElement | undefined;
}
export default RuxIconLocalPhone;
