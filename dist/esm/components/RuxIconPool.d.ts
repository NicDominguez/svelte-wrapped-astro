import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPoolProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPool["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPool["size"];
}
interface RuxIconPoolEvents {
}
interface RuxIconPoolSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPool extends SvelteComponent {
    $$prop_def: RuxIconPoolProps;
    $$events_def: RuxIconPoolEvents;
    $$slot_def: RuxIconPoolSlots;
    $on<K extends keyof RuxIconPoolEvents>(type: K, callback: (e: RuxIconPoolEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPoolProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPoolElement | undefined;
}
export default RuxIconPool;
