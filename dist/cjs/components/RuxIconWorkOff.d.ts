import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWorkOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWorkOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWorkOff["size"];
}
interface RuxIconWorkOffEvents {
}
interface RuxIconWorkOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWorkOff extends SvelteComponent {
    $$prop_def: RuxIconWorkOffProps;
    $$events_def: RuxIconWorkOffEvents;
    $$slot_def: RuxIconWorkOffSlots;
    $on<K extends keyof RuxIconWorkOffEvents>(type: K, callback: (e: RuxIconWorkOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWorkOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWorkOffElement | undefined;
}
export default RuxIconWorkOff;
