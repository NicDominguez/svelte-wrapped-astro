import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalPostOfficeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalPostOffice["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalPostOffice["size"];
}
interface RuxIconLocalPostOfficeEvents {
}
interface RuxIconLocalPostOfficeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalPostOffice extends SvelteComponent {
    $$prop_def: RuxIconLocalPostOfficeProps;
    $$events_def: RuxIconLocalPostOfficeEvents;
    $$slot_def: RuxIconLocalPostOfficeSlots;
    $on<K extends keyof RuxIconLocalPostOfficeEvents>(type: K, callback: (e: RuxIconLocalPostOfficeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalPostOfficeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalPostOfficeElement | undefined;
}
export default RuxIconLocalPostOffice;
