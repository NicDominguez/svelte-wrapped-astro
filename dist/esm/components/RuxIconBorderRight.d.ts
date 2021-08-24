import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderRight["size"];
}
interface RuxIconBorderRightEvents {
}
interface RuxIconBorderRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderRight extends SvelteComponent {
    $$prop_def: RuxIconBorderRightProps;
    $$events_def: RuxIconBorderRightEvents;
    $$slot_def: RuxIconBorderRightSlots;
    $on<K extends keyof RuxIconBorderRightEvents>(type: K, callback: (e: RuxIconBorderRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderRightElement | undefined;
}
export default RuxIconBorderRight;
