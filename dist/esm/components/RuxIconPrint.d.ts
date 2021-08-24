import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPrintProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPrint["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPrint["size"];
}
interface RuxIconPrintEvents {
}
interface RuxIconPrintSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPrint extends SvelteComponent {
    $$prop_def: RuxIconPrintProps;
    $$events_def: RuxIconPrintEvents;
    $$slot_def: RuxIconPrintSlots;
    $on<K extends keyof RuxIconPrintEvents>(type: K, callback: (e: RuxIconPrintEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPrintProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPrintElement | undefined;
}
export default RuxIconPrint;
