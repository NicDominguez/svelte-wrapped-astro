import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewHeadlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewHeadline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewHeadline["size"];
}
interface RuxIconViewHeadlineEvents {
}
interface RuxIconViewHeadlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewHeadline extends SvelteComponent {
    $$prop_def: RuxIconViewHeadlineProps;
    $$events_def: RuxIconViewHeadlineEvents;
    $$slot_def: RuxIconViewHeadlineSlots;
    $on<K extends keyof RuxIconViewHeadlineEvents>(type: K, callback: (e: RuxIconViewHeadlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewHeadlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewHeadlineElement | undefined;
}
export default RuxIconViewHeadline;
