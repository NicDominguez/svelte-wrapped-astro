import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDesktopMacProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDesktopMac["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDesktopMac["size"];
}
interface RuxIconDesktopMacEvents {
}
interface RuxIconDesktopMacSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDesktopMac extends SvelteComponent {
    $$prop_def: RuxIconDesktopMacProps;
    $$events_def: RuxIconDesktopMacEvents;
    $$slot_def: RuxIconDesktopMacSlots;
    $on<K extends keyof RuxIconDesktopMacEvents>(type: K, callback: (e: RuxIconDesktopMacEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDesktopMacProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDesktopMacElement | undefined;
}
export default RuxIconDesktopMac;
