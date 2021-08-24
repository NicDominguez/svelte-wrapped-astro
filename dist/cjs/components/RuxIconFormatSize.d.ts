import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatSizeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatSize["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatSize["size"];
}
interface RuxIconFormatSizeEvents {
}
interface RuxIconFormatSizeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatSize extends SvelteComponent {
    $$prop_def: RuxIconFormatSizeProps;
    $$events_def: RuxIconFormatSizeEvents;
    $$slot_def: RuxIconFormatSizeSlots;
    $on<K extends keyof RuxIconFormatSizeEvents>(type: K, callback: (e: RuxIconFormatSizeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatSizeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatSizeElement | undefined;
}
export default RuxIconFormatSize;
