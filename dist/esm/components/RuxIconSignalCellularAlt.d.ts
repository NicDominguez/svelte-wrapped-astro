import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularAlt["size"];
}
interface RuxIconSignalCellularAltEvents {
}
interface RuxIconSignalCellularAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularAlt extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularAltProps;
    $$events_def: RuxIconSignalCellularAltEvents;
    $$slot_def: RuxIconSignalCellularAltSlots;
    $on<K extends keyof RuxIconSignalCellularAltEvents>(type: K, callback: (e: RuxIconSignalCellularAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularAltElement | undefined;
}
export default RuxIconSignalCellularAlt;
