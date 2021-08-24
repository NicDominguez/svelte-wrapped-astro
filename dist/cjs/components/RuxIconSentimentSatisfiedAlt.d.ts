import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSentimentSatisfiedAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSentimentSatisfiedAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSentimentSatisfiedAlt["size"];
}
interface RuxIconSentimentSatisfiedAltEvents {
}
interface RuxIconSentimentSatisfiedAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSentimentSatisfiedAlt extends SvelteComponent {
    $$prop_def: RuxIconSentimentSatisfiedAltProps;
    $$events_def: RuxIconSentimentSatisfiedAltEvents;
    $$slot_def: RuxIconSentimentSatisfiedAltSlots;
    $on<K extends keyof RuxIconSentimentSatisfiedAltEvents>(type: K, callback: (e: RuxIconSentimentSatisfiedAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSentimentSatisfiedAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSentimentSatisfiedAltElement | undefined;
}
export default RuxIconSentimentSatisfiedAlt;
