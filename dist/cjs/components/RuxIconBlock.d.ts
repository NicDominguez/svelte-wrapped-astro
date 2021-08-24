import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBlockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBlock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBlock["size"];
}
interface RuxIconBlockEvents {
}
interface RuxIconBlockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBlock extends SvelteComponent {
    $$prop_def: RuxIconBlockProps;
    $$events_def: RuxIconBlockEvents;
    $$slot_def: RuxIconBlockSlots;
    $on<K extends keyof RuxIconBlockEvents>(type: K, callback: (e: RuxIconBlockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBlockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBlockElement | undefined;
}
export default RuxIconBlock;
