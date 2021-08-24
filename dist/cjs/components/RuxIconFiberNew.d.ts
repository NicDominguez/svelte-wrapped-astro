import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFiberNewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFiberNew["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFiberNew["size"];
}
interface RuxIconFiberNewEvents {
}
interface RuxIconFiberNewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFiberNew extends SvelteComponent {
    $$prop_def: RuxIconFiberNewProps;
    $$events_def: RuxIconFiberNewEvents;
    $$slot_def: RuxIconFiberNewSlots;
    $on<K extends keyof RuxIconFiberNewEvents>(type: K, callback: (e: RuxIconFiberNewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFiberNewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFiberNewElement | undefined;
}
export default RuxIconFiberNew;
