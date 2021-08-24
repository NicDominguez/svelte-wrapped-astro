import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSentimentDissatisfiedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSentimentDissatisfied["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSentimentDissatisfied["size"];
}
interface RuxIconSentimentDissatisfiedEvents {
}
interface RuxIconSentimentDissatisfiedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSentimentDissatisfied extends SvelteComponent {
    $$prop_def: RuxIconSentimentDissatisfiedProps;
    $$events_def: RuxIconSentimentDissatisfiedEvents;
    $$slot_def: RuxIconSentimentDissatisfiedSlots;
    $on<K extends keyof RuxIconSentimentDissatisfiedEvents>(type: K, callback: (e: RuxIconSentimentDissatisfiedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSentimentDissatisfiedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSentimentDissatisfiedElement | undefined;
}
export default RuxIconSentimentDissatisfied;
