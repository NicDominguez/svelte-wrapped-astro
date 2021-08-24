import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPictureAsPdfProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPictureAsPdf["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPictureAsPdf["size"];
}
interface RuxIconPictureAsPdfEvents {
}
interface RuxIconPictureAsPdfSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPictureAsPdf extends SvelteComponent {
    $$prop_def: RuxIconPictureAsPdfProps;
    $$events_def: RuxIconPictureAsPdfEvents;
    $$slot_def: RuxIconPictureAsPdfSlots;
    $on<K extends keyof RuxIconPictureAsPdfEvents>(type: K, callback: (e: RuxIconPictureAsPdfEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPictureAsPdfProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPictureAsPdfElement | undefined;
}
export default RuxIconPictureAsPdf;
