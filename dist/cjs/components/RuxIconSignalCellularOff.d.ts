import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularOff["size"];
}
interface RuxIconSignalCellularOffEvents {
}
interface RuxIconSignalCellularOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularOff extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularOffProps;
    $$events_def: RuxIconSignalCellularOffEvents;
    $$slot_def: RuxIconSignalCellularOffSlots;
    $on<K extends keyof RuxIconSignalCellularOffEvents>(type: K, callback: (e: RuxIconSignalCellularOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularOffElement | undefined;
}
export default RuxIconSignalCellularOff;
