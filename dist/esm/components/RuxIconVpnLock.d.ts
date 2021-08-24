import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVpnLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVpnLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVpnLock["size"];
}
interface RuxIconVpnLockEvents {
}
interface RuxIconVpnLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVpnLock extends SvelteComponent {
    $$prop_def: RuxIconVpnLockProps;
    $$events_def: RuxIconVpnLockEvents;
    $$slot_def: RuxIconVpnLockSlots;
    $on<K extends keyof RuxIconVpnLockEvents>(type: K, callback: (e: RuxIconVpnLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVpnLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVpnLockElement | undefined;
}
export default RuxIconVpnLock;
