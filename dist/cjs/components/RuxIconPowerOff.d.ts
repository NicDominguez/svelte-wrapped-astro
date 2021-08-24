import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPowerOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPowerOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPowerOff["size"];
}
interface RuxIconPowerOffEvents {
}
interface RuxIconPowerOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPowerOff extends SvelteComponent {
    $$prop_def: RuxIconPowerOffProps;
    $$events_def: RuxIconPowerOffEvents;
    $$slot_def: RuxIconPowerOffSlots;
    $on<K extends keyof RuxIconPowerOffEvents>(type: K, callback: (e: RuxIconPowerOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPowerOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPowerOffElement | undefined;
}
export default RuxIconPowerOff;
