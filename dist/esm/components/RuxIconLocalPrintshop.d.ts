import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalPrintshopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalPrintshop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalPrintshop["size"];
}
interface RuxIconLocalPrintshopEvents {
}
interface RuxIconLocalPrintshopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalPrintshop extends SvelteComponent {
    $$prop_def: RuxIconLocalPrintshopProps;
    $$events_def: RuxIconLocalPrintshopEvents;
    $$slot_def: RuxIconLocalPrintshopSlots;
    $on<K extends keyof RuxIconLocalPrintshopEvents>(type: K, callback: (e: RuxIconLocalPrintshopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalPrintshopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalPrintshopElement | undefined;
}
export default RuxIconLocalPrintshop;
