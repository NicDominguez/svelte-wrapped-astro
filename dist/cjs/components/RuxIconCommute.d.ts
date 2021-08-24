import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCommuteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCommute["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCommute["size"];
}
interface RuxIconCommuteEvents {
}
interface RuxIconCommuteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCommute extends SvelteComponent {
    $$prop_def: RuxIconCommuteProps;
    $$events_def: RuxIconCommuteEvents;
    $$slot_def: RuxIconCommuteSlots;
    $on<K extends keyof RuxIconCommuteEvents>(type: K, callback: (e: RuxIconCommuteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCommuteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCommuteElement | undefined;
}
export default RuxIconCommute;
