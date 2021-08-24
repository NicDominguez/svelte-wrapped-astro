import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardReturnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardReturn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardReturn["size"];
}
interface RuxIconKeyboardReturnEvents {
}
interface RuxIconKeyboardReturnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardReturn extends SvelteComponent {
    $$prop_def: RuxIconKeyboardReturnProps;
    $$events_def: RuxIconKeyboardReturnEvents;
    $$slot_def: RuxIconKeyboardReturnSlots;
    $on<K extends keyof RuxIconKeyboardReturnEvents>(type: K, callback: (e: RuxIconKeyboardReturnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardReturnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardReturnElement | undefined;
}
export default RuxIconKeyboardReturn;
