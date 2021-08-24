import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi4BarLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi4BarLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi4BarLock["size"];
}
interface RuxIconSignalWifi4BarLockEvents {
}
interface RuxIconSignalWifi4BarLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi4BarLock extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi4BarLockProps;
    $$events_def: RuxIconSignalWifi4BarLockEvents;
    $$slot_def: RuxIconSignalWifi4BarLockSlots;
    $on<K extends keyof RuxIconSignalWifi4BarLockEvents>(type: K, callback: (e: RuxIconSignalWifi4BarLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi4BarLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi4BarLockElement | undefined;
}
export default RuxIconSignalWifi4BarLock;
