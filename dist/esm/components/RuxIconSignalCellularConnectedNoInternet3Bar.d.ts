import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularConnectedNoInternet3BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularConnectedNoInternet3Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularConnectedNoInternet3Bar["size"];
}
interface RuxIconSignalCellularConnectedNoInternet3BarEvents {
}
interface RuxIconSignalCellularConnectedNoInternet3BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularConnectedNoInternet3Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularConnectedNoInternet3BarProps;
    $$events_def: RuxIconSignalCellularConnectedNoInternet3BarEvents;
    $$slot_def: RuxIconSignalCellularConnectedNoInternet3BarSlots;
    $on<K extends keyof RuxIconSignalCellularConnectedNoInternet3BarEvents>(type: K, callback: (e: RuxIconSignalCellularConnectedNoInternet3BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularConnectedNoInternet3BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularConnectedNoInternet3BarElement | undefined;
}
export default RuxIconSignalCellularConnectedNoInternet3Bar;
