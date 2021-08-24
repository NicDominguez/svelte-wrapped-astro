import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatShapesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatShapes["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatShapes["size"];
}
interface RuxIconFormatShapesEvents {
}
interface RuxIconFormatShapesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatShapes extends SvelteComponent {
    $$prop_def: RuxIconFormatShapesProps;
    $$events_def: RuxIconFormatShapesEvents;
    $$slot_def: RuxIconFormatShapesSlots;
    $on<K extends keyof RuxIconFormatShapesEvents>(type: K, callback: (e: RuxIconFormatShapesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatShapesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatShapesElement | undefined;
}
export default RuxIconFormatShapes;
