import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWifiLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWifiLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWifiLock["size"];
}
interface RuxIconWifiLockEvents {
}
interface RuxIconWifiLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWifiLock extends SvelteComponent {
    $$prop_def: RuxIconWifiLockProps;
    $$events_def: RuxIconWifiLockEvents;
    $$slot_def: RuxIconWifiLockSlots;
    $on<K extends keyof RuxIconWifiLockEvents>(type: K, callback: (e: RuxIconWifiLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWifiLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWifiLockElement | undefined;
}
export default RuxIconWifiLock;
