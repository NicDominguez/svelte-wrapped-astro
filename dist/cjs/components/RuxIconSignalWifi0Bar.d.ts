import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi0BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi0Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi0Bar["size"];
}
interface RuxIconSignalWifi0BarEvents {
}
interface RuxIconSignalWifi0BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi0Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi0BarProps;
    $$events_def: RuxIconSignalWifi0BarEvents;
    $$slot_def: RuxIconSignalWifi0BarSlots;
    $on<K extends keyof RuxIconSignalWifi0BarEvents>(type: K, callback: (e: RuxIconSignalWifi0BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi0BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi0BarElement | undefined;
}
export default RuxIconSignalWifi0Bar;
