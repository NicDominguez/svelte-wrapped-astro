import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLabelImportantProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLabelImportant["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLabelImportant["size"];
}
interface RuxIconLabelImportantEvents {
}
interface RuxIconLabelImportantSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLabelImportant extends SvelteComponent {
    $$prop_def: RuxIconLabelImportantProps;
    $$events_def: RuxIconLabelImportantEvents;
    $$slot_def: RuxIconLabelImportantSlots;
    $on<K extends keyof RuxIconLabelImportantEvents>(type: K, callback: (e: RuxIconLabelImportantEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLabelImportantProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLabelImportantElement | undefined;
}
export default RuxIconLabelImportant;
