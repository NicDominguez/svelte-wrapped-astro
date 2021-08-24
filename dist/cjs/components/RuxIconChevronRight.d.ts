import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChevronRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChevronRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChevronRight["size"];
}
interface RuxIconChevronRightEvents {
}
interface RuxIconChevronRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChevronRight extends SvelteComponent {
    $$prop_def: RuxIconChevronRightProps;
    $$events_def: RuxIconChevronRightEvents;
    $$slot_def: RuxIconChevronRightSlots;
    $on<K extends keyof RuxIconChevronRightEvents>(type: K, callback: (e: RuxIconChevronRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChevronRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChevronRightElement | undefined;
}
export default RuxIconChevronRight;
