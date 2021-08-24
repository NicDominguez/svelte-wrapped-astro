import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneIphoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneIphone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneIphone["size"];
}
interface RuxIconPhoneIphoneEvents {
}
interface RuxIconPhoneIphoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneIphone extends SvelteComponent {
    $$prop_def: RuxIconPhoneIphoneProps;
    $$events_def: RuxIconPhoneIphoneEvents;
    $$slot_def: RuxIconPhoneIphoneSlots;
    $on<K extends keyof RuxIconPhoneIphoneEvents>(type: K, callback: (e: RuxIconPhoneIphoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneIphoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneIphoneElement | undefined;
}
export default RuxIconPhoneIphone;
