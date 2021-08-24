import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPowerInputProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPowerInput["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPowerInput["size"];
}
interface RuxIconPowerInputEvents {
}
interface RuxIconPowerInputSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPowerInput extends SvelteComponent {
    $$prop_def: RuxIconPowerInputProps;
    $$events_def: RuxIconPowerInputEvents;
    $$slot_def: RuxIconPowerInputSlots;
    $on<K extends keyof RuxIconPowerInputEvents>(type: K, callback: (e: RuxIconPowerInputEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPowerInputProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPowerInputElement | undefined;
}
export default RuxIconPowerInput;
