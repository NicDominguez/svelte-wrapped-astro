import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLabelProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLabel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLabel["size"];
}
interface RuxIconLabelEvents {
}
interface RuxIconLabelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLabel extends SvelteComponent {
    $$prop_def: RuxIconLabelProps;
    $$events_def: RuxIconLabelEvents;
    $$slot_def: RuxIconLabelSlots;
    $on<K extends keyof RuxIconLabelEvents>(type: K, callback: (e: RuxIconLabelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLabelProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLabelElement | undefined;
}
export default RuxIconLabel;
