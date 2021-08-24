import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPropulsionPowerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPropulsionPower["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPropulsionPower["size"];
}
interface RuxIconPropulsionPowerEvents {
}
interface RuxIconPropulsionPowerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPropulsionPower extends SvelteComponent {
    $$prop_def: RuxIconPropulsionPowerProps;
    $$events_def: RuxIconPropulsionPowerEvents;
    $$slot_def: RuxIconPropulsionPowerSlots;
    $on<K extends keyof RuxIconPropulsionPowerEvents>(type: K, callback: (e: RuxIconPropulsionPowerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPropulsionPowerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPropulsionPowerElement | undefined;
}
export default RuxIconPropulsionPower;
