import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFunctionsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFunctions["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFunctions["size"];
}
interface RuxIconFunctionsEvents {
}
interface RuxIconFunctionsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFunctions extends SvelteComponent {
    $$prop_def: RuxIconFunctionsProps;
    $$events_def: RuxIconFunctionsEvents;
    $$slot_def: RuxIconFunctionsSlots;
    $on<K extends keyof RuxIconFunctionsEvents>(type: K, callback: (e: RuxIconFunctionsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFunctionsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFunctionsElement | undefined;
}
export default RuxIconFunctions;
