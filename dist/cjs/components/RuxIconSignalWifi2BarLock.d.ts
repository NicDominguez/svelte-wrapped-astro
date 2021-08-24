import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi2BarLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi2BarLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi2BarLock["size"];
}
interface RuxIconSignalWifi2BarLockEvents {
}
interface RuxIconSignalWifi2BarLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi2BarLock extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi2BarLockProps;
    $$events_def: RuxIconSignalWifi2BarLockEvents;
    $$slot_def: RuxIconSignalWifi2BarLockSlots;
    $on<K extends keyof RuxIconSignalWifi2BarLockEvents>(type: K, callback: (e: RuxIconSignalWifi2BarLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi2BarLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi2BarLockElement | undefined;
}
export default RuxIconSignalWifi2BarLock;
