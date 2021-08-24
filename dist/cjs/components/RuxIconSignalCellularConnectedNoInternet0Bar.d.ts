import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularConnectedNoInternet0BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularConnectedNoInternet0Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularConnectedNoInternet0Bar["size"];
}
interface RuxIconSignalCellularConnectedNoInternet0BarEvents {
}
interface RuxIconSignalCellularConnectedNoInternet0BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularConnectedNoInternet0Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularConnectedNoInternet0BarProps;
    $$events_def: RuxIconSignalCellularConnectedNoInternet0BarEvents;
    $$slot_def: RuxIconSignalCellularConnectedNoInternet0BarSlots;
    $on<K extends keyof RuxIconSignalCellularConnectedNoInternet0BarEvents>(type: K, callback: (e: RuxIconSignalCellularConnectedNoInternet0BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularConnectedNoInternet0BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularConnectedNoInternet0BarElement | undefined;
}
export default RuxIconSignalCellularConnectedNoInternet0Bar;
