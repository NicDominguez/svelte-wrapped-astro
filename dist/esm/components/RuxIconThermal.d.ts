import { Components } from '@astrouxds/astro-web-components';
interface RuxIconThermalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconThermal["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconThermal["size"];
}
interface RuxIconThermalEvents {
}
interface RuxIconThermalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconThermal extends SvelteComponent {
    $$prop_def: RuxIconThermalProps;
    $$events_def: RuxIconThermalEvents;
    $$slot_def: RuxIconThermalSlots;
    $on<K extends keyof RuxIconThermalEvents>(type: K, callback: (e: RuxIconThermalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconThermalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconThermalElement | undefined;
}
export default RuxIconThermal;
