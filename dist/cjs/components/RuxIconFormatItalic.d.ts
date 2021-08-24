import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatItalicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatItalic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatItalic["size"];
}
interface RuxIconFormatItalicEvents {
}
interface RuxIconFormatItalicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatItalic extends SvelteComponent {
    $$prop_def: RuxIconFormatItalicProps;
    $$events_def: RuxIconFormatItalicEvents;
    $$slot_def: RuxIconFormatItalicSlots;
    $on<K extends keyof RuxIconFormatItalicEvents>(type: K, callback: (e: RuxIconFormatItalicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatItalicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatItalicElement | undefined;
}
export default RuxIconFormatItalic;
