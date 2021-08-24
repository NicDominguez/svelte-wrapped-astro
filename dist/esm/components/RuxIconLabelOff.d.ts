import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLabelOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLabelOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLabelOff["size"];
}
interface RuxIconLabelOffEvents {
}
interface RuxIconLabelOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLabelOff extends SvelteComponent {
    $$prop_def: RuxIconLabelOffProps;
    $$events_def: RuxIconLabelOffEvents;
    $$slot_def: RuxIconLabelOffSlots;
    $on<K extends keyof RuxIconLabelOffEvents>(type: K, callback: (e: RuxIconLabelOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLabelOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLabelOffElement | undefined;
}
export default RuxIconLabelOff;
