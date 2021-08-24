import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularConnectedNoInternet4BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularConnectedNoInternet4Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularConnectedNoInternet4Bar["size"];
}
interface RuxIconSignalCellularConnectedNoInternet4BarEvents {
}
interface RuxIconSignalCellularConnectedNoInternet4BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularConnectedNoInternet4Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularConnectedNoInternet4BarProps;
    $$events_def: RuxIconSignalCellularConnectedNoInternet4BarEvents;
    $$slot_def: RuxIconSignalCellularConnectedNoInternet4BarSlots;
    $on<K extends keyof RuxIconSignalCellularConnectedNoInternet4BarEvents>(type: K, callback: (e: RuxIconSignalCellularConnectedNoInternet4BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularConnectedNoInternet4BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularConnectedNoInternet4BarElement | undefined;
}
export default RuxIconSignalCellularConnectedNoInternet4Bar;
