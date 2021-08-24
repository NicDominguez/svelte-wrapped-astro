import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTabletMacProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTabletMac["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTabletMac["size"];
}
interface RuxIconTabletMacEvents {
}
interface RuxIconTabletMacSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTabletMac extends SvelteComponent {
    $$prop_def: RuxIconTabletMacProps;
    $$events_def: RuxIconTabletMacEvents;
    $$slot_def: RuxIconTabletMacSlots;
    $on<K extends keyof RuxIconTabletMacEvents>(type: K, callback: (e: RuxIconTabletMacEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTabletMacProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTabletMacElement | undefined;
}
export default RuxIconTabletMac;
