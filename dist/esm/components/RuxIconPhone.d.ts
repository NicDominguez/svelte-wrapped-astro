import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhone["size"];
}
interface RuxIconPhoneEvents {
}
interface RuxIconPhoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhone extends SvelteComponent {
    $$prop_def: RuxIconPhoneProps;
    $$events_def: RuxIconPhoneEvents;
    $$slot_def: RuxIconPhoneSlots;
    $on<K extends keyof RuxIconPhoneEvents>(type: K, callback: (e: RuxIconPhoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneElement | undefined;
}
export default RuxIconPhone;
