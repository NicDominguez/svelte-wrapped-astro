import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrushProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrush["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrush["size"];
}
interface RuxIconBrushEvents {
}
interface RuxIconBrushSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrush extends SvelteComponent {
    $$prop_def: RuxIconBrushProps;
    $$events_def: RuxIconBrushEvents;
    $$slot_def: RuxIconBrushSlots;
    $on<K extends keyof RuxIconBrushEvents>(type: K, callback: (e: RuxIconBrushEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrushProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrushElement | undefined;
}
export default RuxIconBrush;
