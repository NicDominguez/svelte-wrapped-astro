import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi2BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi2Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi2Bar["size"];
}
interface RuxIconSignalWifi2BarEvents {
}
interface RuxIconSignalWifi2BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi2Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi2BarProps;
    $$events_def: RuxIconSignalWifi2BarEvents;
    $$slot_def: RuxIconSignalWifi2BarSlots;
    $on<K extends keyof RuxIconSignalWifi2BarEvents>(type: K, callback: (e: RuxIconSignalWifi2BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi2BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi2BarElement | undefined;
}
export default RuxIconSignalWifi2Bar;
