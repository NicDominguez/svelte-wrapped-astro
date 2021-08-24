import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSentimentVeryDissatisfiedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSentimentVeryDissatisfied["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSentimentVeryDissatisfied["size"];
}
interface RuxIconSentimentVeryDissatisfiedEvents {
}
interface RuxIconSentimentVeryDissatisfiedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSentimentVeryDissatisfied extends SvelteComponent {
    $$prop_def: RuxIconSentimentVeryDissatisfiedProps;
    $$events_def: RuxIconSentimentVeryDissatisfiedEvents;
    $$slot_def: RuxIconSentimentVeryDissatisfiedSlots;
    $on<K extends keyof RuxIconSentimentVeryDissatisfiedEvents>(type: K, callback: (e: RuxIconSentimentVeryDissatisfiedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSentimentVeryDissatisfiedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSentimentVeryDissatisfiedElement | undefined;
}
export default RuxIconSentimentVeryDissatisfied;
