import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVpnKeyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVpnKey["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVpnKey["size"];
}
interface RuxIconVpnKeyEvents {
}
interface RuxIconVpnKeySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVpnKey extends SvelteComponent {
    $$prop_def: RuxIconVpnKeyProps;
    $$events_def: RuxIconVpnKeyEvents;
    $$slot_def: RuxIconVpnKeySlots;
    $on<K extends keyof RuxIconVpnKeyEvents>(type: K, callback: (e: RuxIconVpnKeyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVpnKeyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVpnKeyElement | undefined;
}
export default RuxIconVpnKey;
