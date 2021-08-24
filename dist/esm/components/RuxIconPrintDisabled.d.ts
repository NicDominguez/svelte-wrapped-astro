import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPrintDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPrintDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPrintDisabled["size"];
}
interface RuxIconPrintDisabledEvents {
}
interface RuxIconPrintDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPrintDisabled extends SvelteComponent {
    $$prop_def: RuxIconPrintDisabledProps;
    $$events_def: RuxIconPrintDisabledEvents;
    $$slot_def: RuxIconPrintDisabledSlots;
    $on<K extends keyof RuxIconPrintDisabledEvents>(type: K, callback: (e: RuxIconPrintDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPrintDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPrintDisabledElement | undefined;
}
export default RuxIconPrintDisabled;
