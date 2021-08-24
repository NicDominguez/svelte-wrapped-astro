import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifi1BarLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifi1BarLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifi1BarLock["size"];
}
interface RuxIconSignalWifi1BarLockEvents {
}
interface RuxIconSignalWifi1BarLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifi1BarLock extends SvelteComponent {
    $$prop_def: RuxIconSignalWifi1BarLockProps;
    $$events_def: RuxIconSignalWifi1BarLockEvents;
    $$slot_def: RuxIconSignalWifi1BarLockSlots;
    $on<K extends keyof RuxIconSignalWifi1BarLockEvents>(type: K, callback: (e: RuxIconSignalWifi1BarLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifi1BarLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifi1BarLockElement | undefined;
}
export default RuxIconSignalWifi1BarLock;
