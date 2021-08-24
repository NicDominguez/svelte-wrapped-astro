import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularConnectedNoInternet2BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularConnectedNoInternet2Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularConnectedNoInternet2Bar["size"];
}
interface RuxIconSignalCellularConnectedNoInternet2BarEvents {
}
interface RuxIconSignalCellularConnectedNoInternet2BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularConnectedNoInternet2Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularConnectedNoInternet2BarProps;
    $$events_def: RuxIconSignalCellularConnectedNoInternet2BarEvents;
    $$slot_def: RuxIconSignalCellularConnectedNoInternet2BarSlots;
    $on<K extends keyof RuxIconSignalCellularConnectedNoInternet2BarEvents>(type: K, callback: (e: RuxIconSignalCellularConnectedNoInternet2BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularConnectedNoInternet2BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularConnectedNoInternet2BarElement | undefined;
}
export default RuxIconSignalCellularConnectedNoInternet2Bar;
