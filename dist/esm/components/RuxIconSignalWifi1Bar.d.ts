import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi1BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi1Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi1Bar["size"];
}
interface RuxIconSignalWifi1BarEvents {
}
interface RuxIconSignalWifi1BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi1Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi1BarProps;
    $$events_def: RuxIconSignalWifi1BarEvents;
    $$slot_def: RuxIconSignalWifi1BarSlots;
    $on<K extends keyof RuxIconSignalWifi1BarEvents>(type: K, callback: (e: RuxIconSignalWifi1BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi1BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi1BarElement | undefined;
}
export default RuxIconSignalWifi1Bar;
