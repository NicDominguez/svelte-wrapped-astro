import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPaletteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPalette["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPalette["size"];
}
interface RuxIconPaletteEvents {
}
interface RuxIconPaletteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPalette extends SvelteComponent {
    $$prop_def: RuxIconPaletteProps;
    $$events_def: RuxIconPaletteEvents;
    $$slot_def: RuxIconPaletteSlots;
    $on<K extends keyof RuxIconPaletteEvents>(type: K, callback: (e: RuxIconPaletteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPaletteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPaletteElement | undefined;
}
export default RuxIconPalette;
