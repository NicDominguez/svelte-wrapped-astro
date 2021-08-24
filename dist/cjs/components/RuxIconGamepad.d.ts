import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGamepadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGamepad["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGamepad["size"];
}
interface RuxIconGamepadEvents {
}
interface RuxIconGamepadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGamepad extends SvelteComponent {
    $$prop_def: RuxIconGamepadProps;
    $$events_def: RuxIconGamepadEvents;
    $$slot_def: RuxIconGamepadSlots;
    $on<K extends keyof RuxIconGamepadEvents>(type: K, callback: (e: RuxIconGamepadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGamepadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGamepadElement | undefined;
}
export default RuxIconGamepad;
