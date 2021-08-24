import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalDiningProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalDining["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalDining["size"];
}
interface RuxIconLocalDiningEvents {
}
interface RuxIconLocalDiningSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalDining extends SvelteComponent {
    $$prop_def: RuxIconLocalDiningProps;
    $$events_def: RuxIconLocalDiningEvents;
    $$slot_def: RuxIconLocalDiningSlots;
    $on<K extends keyof RuxIconLocalDiningEvents>(type: K, callback: (e: RuxIconLocalDiningEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalDiningProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalDiningElement | undefined;
}
export default RuxIconLocalDining;
