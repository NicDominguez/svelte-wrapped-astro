import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCreateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCreate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCreate["size"];
}
interface RuxIconCreateEvents {
}
interface RuxIconCreateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCreate extends SvelteComponent {
    $$prop_def: RuxIconCreateProps;
    $$events_def: RuxIconCreateEvents;
    $$slot_def: RuxIconCreateSlots;
    $on<K extends keyof RuxIconCreateEvents>(type: K, callback: (e: RuxIconCreateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCreateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCreateElement | undefined;
}
export default RuxIconCreate;
