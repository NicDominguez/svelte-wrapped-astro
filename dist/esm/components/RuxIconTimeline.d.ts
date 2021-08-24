import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimelineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTimeline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimeline["size"];
}
interface RuxIconTimelineEvents {
}
interface RuxIconTimelineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimeline extends SvelteComponent {
    $$prop_def: RuxIconTimelineProps;
    $$events_def: RuxIconTimelineEvents;
    $$slot_def: RuxIconTimelineSlots;
    $on<K extends keyof RuxIconTimelineEvents>(type: K, callback: (e: RuxIconTimelineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimelineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimelineElement | undefined;
}
export default RuxIconTimeline;
