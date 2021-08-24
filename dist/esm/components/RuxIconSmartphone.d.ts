import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSmartphoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSmartphone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSmartphone["size"];
}
interface RuxIconSmartphoneEvents {
}
interface RuxIconSmartphoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSmartphone extends SvelteComponent {
    $$prop_def: RuxIconSmartphoneProps;
    $$events_def: RuxIconSmartphoneEvents;
    $$slot_def: RuxIconSmartphoneSlots;
    $on<K extends keyof RuxIconSmartphoneEvents>(type: K, callback: (e: RuxIconSmartphoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSmartphoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSmartphoneElement | undefined;
}
export default RuxIconSmartphone;
