import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi4BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi4Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi4Bar["size"];
}
interface RuxIconSignalWifi4BarEvents {
}
interface RuxIconSignalWifi4BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi4Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi4BarProps;
    $$events_def: RuxIconSignalWifi4BarEvents;
    $$slot_def: RuxIconSignalWifi4BarSlots;
    $on<K extends keyof RuxIconSignalWifi4BarEvents>(type: K, callback: (e: RuxIconSignalWifi4BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi4BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi4BarElement | undefined;
}
export default RuxIconSignalWifi4Bar;
