import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPowerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPower["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPower["size"];
}
interface RuxIconPowerEvents {
}
interface RuxIconPowerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPower extends SvelteComponent {
    $$prop_def: RuxIconPowerProps;
    $$events_def: RuxIconPowerEvents;
    $$slot_def: RuxIconPowerSlots;
    $on<K extends keyof RuxIconPowerEvents>(type: K, callback: (e: RuxIconPowerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPowerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPowerElement | undefined;
}
export default RuxIconPower;
