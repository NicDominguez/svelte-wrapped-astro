import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi3BarLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi3BarLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi3BarLock["size"];
}
interface RuxIconSignalWifi3BarLockEvents {
}
interface RuxIconSignalWifi3BarLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi3BarLock extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi3BarLockProps;
    $$events_def: RuxIconSignalWifi3BarLockEvents;
    $$slot_def: RuxIconSignalWifi3BarLockSlots;
    $on<K extends keyof RuxIconSignalWifi3BarLockEvents>(type: K, callback: (e: RuxIconSignalWifi3BarLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi3BarLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi3BarLockElement | undefined;
}
export default RuxIconSignalWifi3BarLock;
