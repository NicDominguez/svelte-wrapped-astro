import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatPaintProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatPaint["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatPaint["size"];
}
interface RuxIconFormatPaintEvents {
}
interface RuxIconFormatPaintSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatPaint extends SvelteComponent {
    $$prop_def: RuxIconFormatPaintProps;
    $$events_def: RuxIconFormatPaintEvents;
    $$slot_def: RuxIconFormatPaintSlots;
    $on<K extends keyof RuxIconFormatPaintEvents>(type: K, callback: (e: RuxIconFormatPaintEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatPaintProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatPaintElement | undefined;
}
export default RuxIconFormatPaint;
