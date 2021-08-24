import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularConnectedNoInternet1BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularConnectedNoInternet1Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularConnectedNoInternet1Bar["size"];
}
interface RuxIconSignalCellularConnectedNoInternet1BarEvents {
}
interface RuxIconSignalCellularConnectedNoInternet1BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularConnectedNoInternet1Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularConnectedNoInternet1BarProps;
    $$events_def: RuxIconSignalCellularConnectedNoInternet1BarEvents;
    $$slot_def: RuxIconSignalCellularConnectedNoInternet1BarSlots;
    $on<K extends keyof RuxIconSignalCellularConnectedNoInternet1BarEvents>(type: K, callback: (e: RuxIconSignalCellularConnectedNoInternet1BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularConnectedNoInternet1BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularConnectedNoInternet1BarElement | undefined;
}
export default RuxIconSignalCellularConnectedNoInternet1Bar;
