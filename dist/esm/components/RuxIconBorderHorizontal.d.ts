import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderHorizontalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderHorizontal["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderHorizontal["size"];
}
interface RuxIconBorderHorizontalEvents {
}
interface RuxIconBorderHorizontalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderHorizontal extends SvelteComponent {
    $$prop_def: RuxIconBorderHorizontalProps;
    $$events_def: RuxIconBorderHorizontalEvents;
    $$slot_def: RuxIconBorderHorizontalSlots;
    $on<K extends keyof RuxIconBorderHorizontalEvents>(type: K, callback: (e: RuxIconBorderHorizontalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderHorizontalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderHorizontalElement | undefined;
}
export default RuxIconBorderHorizontal;
