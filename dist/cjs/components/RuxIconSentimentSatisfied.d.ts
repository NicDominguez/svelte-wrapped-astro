import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSentimentSatisfiedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSentimentSatisfied["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSentimentSatisfied["size"];
}
interface RuxIconSentimentSatisfiedEvents {
}
interface RuxIconSentimentSatisfiedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSentimentSatisfied extends SvelteComponent {
    $$prop_def: RuxIconSentimentSatisfiedProps;
    $$events_def: RuxIconSentimentSatisfiedEvents;
    $$slot_def: RuxIconSentimentSatisfiedSlots;
    $on<K extends keyof RuxIconSentimentSatisfiedEvents>(type: K, callback: (e: RuxIconSentimentSatisfiedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSentimentSatisfiedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSentimentSatisfiedElement | undefined;
}
export default RuxIconSentimentSatisfied;
