import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi3BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi3Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi3Bar["size"];
}
interface RuxIconSignalWifi3BarEvents {
}
interface RuxIconSignalWifi3BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi3Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi3BarProps;
    $$events_def: RuxIconSignalWifi3BarEvents;
    $$slot_def: RuxIconSignalWifi3BarSlots;
    $on<K extends keyof RuxIconSignalWifi3BarEvents>(type: K, callback: (e: RuxIconSignalWifi3BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi3BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi3BarElement | undefined;
}
export default RuxIconSignalWifi3Bar;
