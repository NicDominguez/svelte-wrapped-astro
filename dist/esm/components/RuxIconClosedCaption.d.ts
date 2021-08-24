import { Components } from '@astrouxds/astro-web-components';
interface RuxIconClosedCaptionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconClosedCaption["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconClosedCaption["size"];
}
interface RuxIconClosedCaptionEvents {
}
interface RuxIconClosedCaptionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconClosedCaption extends SvelteComponent {
    $$prop_def: RuxIconClosedCaptionProps;
    $$events_def: RuxIconClosedCaptionEvents;
    $$slot_def: RuxIconClosedCaptionSlots;
    $on<K extends keyof RuxIconClosedCaptionEvents>(type: K, callback: (e: RuxIconClosedCaptionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconClosedCaptionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconClosedCaptionElement | undefined;
}
export default RuxIconClosedCaption;
