import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSentimentVerySatisfiedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSentimentVerySatisfied["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSentimentVerySatisfied["size"];
}
interface RuxIconSentimentVerySatisfiedEvents {
}
interface RuxIconSentimentVerySatisfiedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSentimentVerySatisfied extends SvelteComponent {
    $$prop_def: RuxIconSentimentVerySatisfiedProps;
    $$events_def: RuxIconSentimentVerySatisfiedEvents;
    $$slot_def: RuxIconSentimentVerySatisfiedSlots;
    $on<K extends keyof RuxIconSentimentVerySatisfiedEvents>(type: K, callback: (e: RuxIconSentimentVerySatisfiedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSentimentVerySatisfiedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSentimentVerySatisfiedElement | undefined;
}
export default RuxIconSentimentVerySatisfied;
