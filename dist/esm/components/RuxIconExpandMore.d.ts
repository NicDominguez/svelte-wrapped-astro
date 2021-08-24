import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExpandMoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExpandMore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExpandMore["size"];
}
interface RuxIconExpandMoreEvents {
}
interface RuxIconExpandMoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExpandMore extends SvelteComponent {
    $$prop_def: RuxIconExpandMoreProps;
    $$events_def: RuxIconExpandMoreEvents;
    $$slot_def: RuxIconExpandMoreSlots;
    $on<K extends keyof RuxIconExpandMoreEvents>(type: K, callback: (e: RuxIconExpandMoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExpandMoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExpandMoreElement | undefined;
}
export default RuxIconExpandMore;
