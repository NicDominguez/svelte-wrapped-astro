import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNfcProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNfc["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNfc["size"];
}
interface RuxIconNfcEvents {
}
interface RuxIconNfcSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNfc extends SvelteComponent {
    $$prop_def: RuxIconNfcProps;
    $$events_def: RuxIconNfcEvents;
    $$slot_def: RuxIconNfcSlots;
    $on<K extends keyof RuxIconNfcEvents>(type: K, callback: (e: RuxIconNfcEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNfcProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNfcElement | undefined;
}
export default RuxIconNfc;
