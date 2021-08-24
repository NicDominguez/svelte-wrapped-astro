import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowDownwardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowDownward["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowDownward["size"];
}
interface RuxIconArrowDownwardEvents {
}
interface RuxIconArrowDownwardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowDownward extends SvelteComponent {
    $$prop_def: RuxIconArrowDownwardProps;
    $$events_def: RuxIconArrowDownwardEvents;
    $$slot_def: RuxIconArrowDownwardSlots;
    $on<K extends keyof RuxIconArrowDownwardEvents>(type: K, callback: (e: RuxIconArrowDownwardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowDownwardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowDownwardElement | undefined;
}
export default RuxIconArrowDownward;
