import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRateReviewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRateReview["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRateReview["size"];
}
interface RuxIconRateReviewEvents {
}
interface RuxIconRateReviewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRateReview extends SvelteComponent {
    $$prop_def: RuxIconRateReviewProps;
    $$events_def: RuxIconRateReviewEvents;
    $$slot_def: RuxIconRateReviewSlots;
    $on<K extends keyof RuxIconRateReviewEvents>(type: K, callback: (e: RuxIconRateReviewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRateReviewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRateReviewElement | undefined;
}
export default RuxIconRateReview;
