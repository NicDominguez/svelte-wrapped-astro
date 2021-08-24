import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowRight["size"];
}
interface RuxIconArrowRightEvents {
}
interface RuxIconArrowRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowRight extends SvelteComponent {
    $$prop_def: RuxIconArrowRightProps;
    $$events_def: RuxIconArrowRightEvents;
    $$slot_def: RuxIconArrowRightSlots;
    $on<K extends keyof RuxIconArrowRightEvents>(type: K, callback: (e: RuxIconArrowRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowRightElement | undefined;
}
export default RuxIconArrowRight;
